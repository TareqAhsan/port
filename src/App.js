import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Particles from 'react-particles-js';
import Header from './Header';
import Navigation from './Navigation/Navigation';
import AboutMe from './Navigation/AboutMe/AboutMe';
import Skills from './Skills/Skills';
// import { Snow } from 'react-snow-particle/lib';

function App() {
  return (
    <div className="App">
      <Particles
       params={{
         Particles:{
           number:{
             value:30,
             density:{
               enable:true,
               value_area:900
             }
           }
         }
       }}
      />
      <Navigation/>
       <Header/>
       <AboutMe/>
       <Skills/>
    </div>
  );
}

export default App;
