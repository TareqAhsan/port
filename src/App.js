import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation/Navigation";
import AboutMe from "./Navigation/AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import MyProjects from "./MyProjects/MyProjects";
import Home from "./Home/Home";
import MyothersDetails from "./MyothersDetails/MyothersDetails";
import ReactDetails from "./ReactDetails/ReactDetails";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Contact from "./Contact/Contact";
import Blogs from "./Blogs/Blogs";
// import { Snow } from 'react-snow-particle/lib';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myotherdetails/:id" element={<MyothersDetails />} />
          <Route path="/reactdetails/:id" element={<ReactDetails />} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={ <Skills />} />
          <Route path="/myprojects" element={ < MyProjects/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
