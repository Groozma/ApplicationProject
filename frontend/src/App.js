import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
