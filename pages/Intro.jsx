import styles from '../styles/Styles.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';

const Intro = () => {

    return ( 

        <>
        <div className={styles.intro} id='intro'>
            <div className={styles.left}>
                <div className={styles.introimg}>
                    <img src="rick1.png" alt="man" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightwrapper}>
                    <h2>Hi There, I'm</h2>
                    <h1>Rick Mohamed</h1>
                    <h3>
                        <p>Freelance</p>  <Typewriter options={{ strings:["Web Developer", "Web Designer"], autoStart:true, delay:75, loop:true}} /> 
                    </h3>
                </div>
                <a href="#portfolio">
                <AiOutlineArrowDown className={styles.arrow}/>
                </a>
            </div>
        </div>
        </>
     );
}
 
export default Intro;
