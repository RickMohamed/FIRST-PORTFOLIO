import Intro from '../pages/Intro'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Topbar from '../comps/Topbar'
import Menubar from '../comps/Menubar'
import About from './About'
import Services from './Services'


const Main = () => {


  return ( 
    <>
    <div className="app">
      <Topbar/>
      <Menubar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Services/>
        <About/>
        <Contact/>
      </div>
    </div>
    </>
   );
}
 
export default Main;