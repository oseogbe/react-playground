import ScrollAwareHeader from './components/ScrollAwareHeader';

function App() {

  return (
    <main>
      <ScrollAwareHeader />
      <div className='max-w-7xl mx-auto p-8'>
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

export default App
