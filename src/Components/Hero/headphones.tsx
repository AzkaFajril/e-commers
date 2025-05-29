import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import smallHeadphone3 from '../../assets/small-headphone-3.png';
import smallHeadphone4 from '../../assets/small-headphone-1.png';

interface Card {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
}

const MultiCardCarousel: React.FC = () => {
  const navigate = useNavigate();
  // State to hold the number of cards to show based on screen size
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to hold the number of cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(3);

  const cards: Card[] = [
    { id: 1, image: smallHeadphone3, title: 'Original Beats Solo Pro', price: '$333.20', rating: 4.9 },
    { id: 2, image: smallHeadphone4, title: 'Beats Studio3 Bluetooth', price: '$119.88', rating: 5.0 },
    { id: 3, image: smallHeadphone3, title: 'Beats Solo3 Wireless', price: '$199.95', rating: 4.8 },
    { id: 4, image: smallHeadphone4, title: 'Beats Solo', price: '$169.00', rating: 5.0 },
    { id: 5, image: smallHeadphone3, title: 'Sports Headphones', price: '$179.99', rating: 4.4 },
    { id: 6, image: smallHeadphone3, title: 'Gaming Headset Pro', price: '$250.00', rating: 4.7 },
    { id: 7, image: smallHeadphone3, title: 'Wireless Earbuds 2', price: '$100.00', rating: 4.6 },
    { id: 8, image: smallHeadphone3, title: 'Studio Monitor', price: '$400.00', rating: 4.9 },
  ];

  // Effect to update cardsToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // large screens
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) { // medium screens
        setCardsToShow(2);
      } else { // small screens
        setCardsToShow(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Adjust navigation logic to jump by the number of cardsToShow
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsToShow;
      // Loop back to the start if we reach the end
      return nextIndex >= cards.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsToShow;
      // Loop to the end if we go below the start
      return nextIndex < 0 ? Math.max(0, cards.length - cardsToShow) : nextIndex;
    });
  };

  const handleBuyNow = (card: Card) => {
    const cartItem = {
      id: card.id,
      name: card.title,
      price: parseFloat(card.price.replace('$', '')),
      quantity: 1,
      image: card.image
    };
    
    localStorage.setItem('selectedItem', JSON.stringify(cartItem));
    navigate('/buy');
  };

  // Calculate the actual cards to display
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsToShow);

  // Handle wrap around case for visible cards if we reach the end
  if (visibleCards.length < cardsToShow && cards.length >= cardsToShow) {
      const remaining = cardsToShow - visibleCards.length;
      visibleCards.push(...cards.slice(0, remaining));
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Navigation Buttons */}
          {/* Show Prev button only if not at the beginning (or looping is desired) */}
          {(currentIndex > 0 || (currentIndex === 0 && cards.length > cardsToShow)) && (
            <button
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
           )}

          {/* Show Next button only if not at the end (considering cardsToShow) */}
          {(currentIndex < cards.length - cardsToShow || (currentIndex >= cards.length - cardsToShow && cards.length > cardsToShow)) && (
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Cards Container - use responsive width and dynamic gap */}
          <div className={`flex space-x-4 sm:space-x-6 overflow-hidden ${cardsToShow === 1 ? 'justify-center' : ''}`}>
            {/* Map over visibleCards */}
            {visibleCards.map((card) => (
              <div
                key={card.id}
                // Dynamic width classes based on cardsToShow
                className={`flex-none ${cardsToShow === 1 ? 'w-full sm:w-1/2 md:w-1/3' : cardsToShow === 2 ? 'w-1/2' : 'w-1/3'} transform transition-transform duration-300`}
              >
                {/* Card Content */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative flex justify-center items-center p-4 h-40 sm:h-48"> {/* Adjusted image height */}
                    <img
                      className="max-h-full object-contain"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                  {/* Text Content */}
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-1 leading-tight">{card.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 leading-tight">Price {card.price}</p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-semibold text-yellow-500">★ {card.rating}</span>
                      <button 
                        onClick={() => handleBuyNow(card)}
                        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Partially visible next card removed for simplicity in responsive view */}

          </div>

          {/* Pagination Dots Removed */}
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;