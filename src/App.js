
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import Apex from './pages/ApexLegend';
import Genshin from './pages/Genshin';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wikinews' element={<News/>}/>
        <Route path='/apex' element={<Apex/>}/>
        <Route path='/genshin' element={<Genshin/>}/>
      </Routes>
    </Router>
  );
}

export default App;