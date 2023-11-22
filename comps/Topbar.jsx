import { useContext } from 'react';
import Context from '../contexts/Context';
import { RiContactsFill } from 'react-icons/ri'
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";
import { TbHexagonLetterR } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
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
                         <TbHexagonLetterR />
                    </a>
                <div className="contacts">
                    <div className="icon">
                        <RiContactsFill className={styles.topbaricon}/>
                        <span>+254 702363355</span>
                    </div>

                    <div className="icon">
                        <GoMail className={styles.topbaricon}/>
                        <span>rickmohaaa@gmail.com</span>
                    </div>


                </div>


                <div className='icons'>
                        <a className="topbar-icon" href="https://www.instagram.com/_el.mego/">
                            <AiFillInstagram />
                        </a>
                        <a className="topbar-icon" href="https://github.com/RickMohamed">
                           <FaGithubAlt />
                        </a>
                        <a className="topbar-icon" href="https://www.instagram.com/_el.mego/">
                             <FaLinkedin />
                        </a>
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