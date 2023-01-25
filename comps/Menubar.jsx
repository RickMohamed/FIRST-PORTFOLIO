import styles from '../styles/Styles.module.css'
import { useContext } from 'react';
import Context from '../contexts/Context';

const Menubar = () => {

    const {open} = useContext(Context)
    return ( 
        <>
        <div className={`${open ? styles.menu: styles.menuu}`}>
            <ul>
                <a href="#intro"><div><li><p>Home</p></li></div></a>
                <a href="#portfolio"><div><li><p>Porfolio</p></li></div></a>
                <a href="#works"><div><li><p>Works</p></li></div></a>
                <a href="#testimonials"><div><li><p>Testimonials</p></li></div></a>
                <a href="#contact"><div><li><p>Contact</p></li></div></a>
            </ul>
        </div>
        </>
     );
}
 
export default Menubar;