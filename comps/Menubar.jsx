import styles from '../styles/Styles.module.css'
import { useContext } from 'react';
import Context from '../contexts/Context';

const Menubar = () => {

    const handleMenu=()=>{
        setOpen(!open)
    }

    const { open , setOpen} = useContext(Context)
    return ( 
        <>
        <div className={`${open ? styles.menu: styles.menuu}`}>
            <ul>
                <a onClick={handleMenu} href="#intro"><div><li><p>Home</p></li></div></a>
                <a onClick={handleMenu} href="#portfolio"><div><li><p>Porfolio</p></li></div></a>
                <a onClick={handleMenu} href="#services"><div><li><p>Services</p></li></div></a>
                <a onClick={handleMenu} href="#about"><div><li><p>About</p></li></div></a>
                <a onClick={handleMenu} href="#contact"><div><li><p>Contact</p></li></div></a>
            </ul>
        </div>
        </>
     );
}
 
export default Menubar;