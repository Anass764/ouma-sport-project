import { useState, useEffect } from 'react';
import { X, Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type ProductDetailProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetchReviews();
  }, [product.id]);

  

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Veuillez vous connecter pour laisser un avis');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('reviews').insert({
        product_id: product.id,
        user_id: user.id,
        rating: newRating,
        comment: newComment,
      });

      if (error) throw error;

      setNewRating(5);
      setNewComment('');
      fetchReviews();
      alert('Votre avis a été ajouté avec succès!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Erreur lors de l\'ajout de votre avis');
    } finally {
      setIsSubmitting(false);
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-800">Détails du produit</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {averageRating.toFixed(1)} ({reviews.length} avis)
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-lg">{product.description}</p>

              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-red-600">{product.price}</span>
                  <span className="text-xl text-gray-600">MAD</span>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Quantité:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">Stock disponible:</span> {product.stock} unités
                </div>

                <button
                  disabled={product.stock === 0}
                  className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span>Ajouter au panier</span>
                </button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-2">Catégorie:</h3>
                <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Avis des clients</h3>

            {user && (
              <form onSubmit={handleSubmitReview} className="bg-gray-50 p-6 rounded-xl mb-8 space-y-4">
                <h4 className="font-semibold text-gray-800">Laisser un avis</h4>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Note
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setNewRating(rating)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            rating <= newRating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Commentaire
                  </label>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Partagez votre expérience avec ce produit..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Publier l\'avis'}
                </button>
              </form>
            )}

            <div className="space-y-4">
              {reviews.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Aucun avis pour le moment</p>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className="bg-white border rounded-xl p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {review.profiles?.full_name || 'Client'}
                        </p>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.created_at).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="text-gray-600">{review.comment}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
