import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Anda perlu mengimpor gambar iPhone di sini
import iphone6Image from '../../assets/iphone-6.png';
import iphone7Image from '../../assets/iphone-7.png';
import iphone8Image from '../../assets/iphone-8.png';
import iphoneXImage from '../../assets/iphone-x.png';
import iphone11Image from '../../assets/iphone-11.png';
import iphone12Image from '../../assets/iphone-12.png';
import iphone13Image from '../../assets/iphone-13.png';
import iphone14Image from '../../assets/iphone-14.png';
import iphone15Image from '../../assets/iphone-15.png';
// ... dst ...

interface Card {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
}

const Ipone: React.FC = () => {
  const navigate = useNavigate();
  // State to hold the number of cards to show based on screen size
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to hold the number of cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(3);

  // Data kartu diperbarui dengan iPhone dari seri 6 sampai terbaru
  const cards: Card[] = [
    { id: 1, image: iphone6Image, title: 'iPhone 6', price: '$150.00', rating: 4.1 },
    { id: 2, image: iphone7Image, title: 'iPhone 7', price: '$200.00', rating: 4.2 },
    { id: 3, image: iphone8Image, title: 'iPhone 8', price: '$250.00', rating: 4.3 },
    { id: 4, image: iphoneXImage, title: 'iPhone X', price: '$350.00', rating: 4.5 },
    { id: 5, image: iphone11Image, title: 'iPhone 11', price: '$450.00', rating: 4.6 },
    { id: 6, image: iphone12Image, title: 'iPhone 12', price: '$550.00', rating: 4.7 },
    { id: 7, image: iphone13Image, title: 'iPhone 13', price: '$650.00', rating: 4.8 },
    { id: 8, image: iphone14Image, title: 'iPhone 14', price: '$750.00', rating: 4.8 },
    { id: 9, image: iphone15Image, title: 'iPhone 15', price: '$850.00', rating: 4.9 },
    // Anda bisa menambahkan model Pro/Plus/SE jika diinginkan
    // { id: 10, image: '/assets/iphone-15-pro.png', title: 'iPhone 15 Pro', price: '$999.00', rating: 5.0 },
  ];

  // Effect to update cardsToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 640) { // Adjusted breakpoint to sm
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative px-8 sm:px-12 lg:px-16">
          {/* Navigation Buttons */}
          {(currentIndex > 0 || (currentIndex === 0 && cards.length > cardsToShow)) && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {(currentIndex < cards.length - cardsToShow || (currentIndex >= cards.length - cardsToShow && cards.length > cardsToShow)) && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-hidden`}>
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="transform transition-transform duration-300"
              >
                {/* Card Content */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative flex justify-center items-center p-4 h-40 sm:h-48">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipone;