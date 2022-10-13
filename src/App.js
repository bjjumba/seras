import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
       <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/not" element={<NotFound/>}/>
          <Route
              path="*"
              element={<Navigate to="/not" replace />}
          />
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
