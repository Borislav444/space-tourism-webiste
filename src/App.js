import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Moon from './components/Moon'
import Mars from './components/Mars'
import Europa from './components/Europa';
import Titan from './components/Titan'
function App() {
  
  return (
    <div className="App">
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination/*' element={<Destination/>}>
       <Route path='moon' element={<Moon/>}/>
       <Route path='mars' element={<Mars/>}/>
       <Route path='europa' element={<Europa/>}/>
       <Route path='titan' element={<Titan/>}/>
      </Route> 
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
    </Routes>
     
    

      
 

     
    </div>
  );
}

export default App;
