import logo from './logo.svg';
import './App.css';

import Header from './views/general/components/Header';
import Menu from './views/general/components/Menu';
import Footer from './views/general/components/Footer';

import Home from './views/general/pages/Home';
function App() {
  return (
      <div>
      <Header/>
      <Menu/>
      <Home/>
      <Footer/>
    </div>
    
  );
}

export default App;
