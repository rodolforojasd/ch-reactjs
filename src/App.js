import './custom.scss'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import CarouselBanner from './components/CarouselBanner/CarouselBanner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Navbar/>
        <CarouselBanner/>
        <ItemListContainer text="Bienvenido a Unión Licorera"/>
      </div>
    </div>
  );
}

export default App;
