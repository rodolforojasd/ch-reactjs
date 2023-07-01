import './custom.scss'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <MainRouter/>
      </CartProvider>
      
    </div>
  );
}

export default App;
