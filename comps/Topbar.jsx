import { useContext } from 'react';
import Context from '../contexts/Context';
import { RiContactsFill } from 'react-icons/ri'
import { GoMail } from 'react-icons/go'
import styles from '../styles/Styles.module.css'



const Topbar = () => {

const {open, setOpen} = useContext(Context)
    return ( 
        <>
        <div className={`${open ? 'topbar': 'active'}`}>
            <div className="wrapper">
                    <div className="leftside">
                    <a href="#intro" className='logo'>
                        .genius
                    </a>
                <div className="contacts">
                    <div className="icon">
                        <RiContactsFill className={styles.topbaricon}/>
                        <span>+254 3376557</span>
                    </div>

                    <div className="icon">
                        <GoMail className={styles.topbaricon}/>
                        <span>rickmohaaa@gmail.com</span>
                    </div>
                </div>
                    </div>
                <div className="right" onClick={()=>{setOpen(!open)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Topbar;