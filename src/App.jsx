import { useState } from 'react';
import ScrollAwareHeader from './components/ScrollAwareHeader';
import ScrollStickyCard from './components/ScrollStickyCard';

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showReserveBtn, setShowReserveBtn] = useState(false);

  return (
    <main>
      <ScrollAwareHeader
        setHeaderHeight={setHeaderHeight}
        showReserveBtn={showReserveBtn}
      />
      <div className="max-w-7xl mx-auto p-8">
        <div className='h-[300px] bg-white shadow-md rounded-lg p-4 mb-6'>
          Some content here...
        </div>
        <div className='relative grid grid-cols-3 gap-x-8 '>
          <div className='col-span-2'>
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <h2 className="text-xl font-semibold">Card {index + 1}</h2>
                <p>This is the content of card {index + 1}.</p>
              </div>
            ))}
          </div>
          <div className='col-span-1'>
            <ScrollStickyCard
              headerHeight={headerHeight}
              onReserveBtnOutOfView={setShowReserveBtn}
            />
          </div>
        </div>
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold">Card {index + 1}</h2>
            <p>This is the content of card {index + 1}.</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
