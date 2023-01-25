import Intro from '../pages/Intro'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Topbar from '../comps/Topbar'
import Menubar from '../comps/Menubar'
import Testimonials from '../pages/Testimonials'
import Works from '../pages/Works'


const Main = () => {


  return ( 
    <>
    <div className="app">
      <Topbar/>
      <Menubar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
    </>
   );
}
 
export default Main;