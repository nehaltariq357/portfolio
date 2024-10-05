import About from "./component/Home/About/About";
import Home1 from "./component/Home/Home1"
import Project from "./component/Home/Projects/Project";
import Services from "./component/Home/Services/Services";
import Skills from "./component/Home/Skills/Skills";
export default function Home() {

  return (
    <div>
     
      <Home1/>
      <About/>
      <Services/>
      <Project/>
      <Skills/>
    </div>
  );
}
