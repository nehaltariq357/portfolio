import About from "./component/Home/About/About";
import Contact from "./component/Home/Contact/Contact";
import Home1 from "./component/Home/Home1"
import Project from "./component/Home/Projects/Project";
import Skills from "./component/Home/Skills/Skills";
export default function Home() {

  return (
    <div>
     
      <Home1/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}
