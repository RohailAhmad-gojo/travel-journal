import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from "./data"


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        title={item.title}
        img={item.imageUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        location={item.location}
        googleMap={item.googleMapsUrl}
        description={item.description}
        />

    )
  })
  return (
    <div className='container'>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
