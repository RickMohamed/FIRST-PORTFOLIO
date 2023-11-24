import styles from '../styles/contact.module.css';
import { useState } from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.left}>
        <img src="street.jpg" alt="" />
      </div>
      <div className={styles.right}>
        <h2>Contact</h2>
       <div className={styles.contactCard}>
          <div className={styles.contactDetails}>
           <h2>Get in touch</h2>
            <ul>
              <li>
                <h4>Name :</h4>
                <p>Rick Mohamed</p>
              </li>
              <li>
                <h4>Email :</h4>
                <p>rickmohaa@gmail.com</p>
              </li>
              <li>
                <h4>Phone :</h4>
                <p>+254702363355</p>
              </li>
            </ul>

            <div className={styles.icons}>
              <AiFillInstagram/>
              <FaGithubAlt/>
              <FaLinkedin/>
            </div>
          </div>
          <div className={styles.form}>
            <input placeholder='Name' type="text" />
            <input placeholder='Email' type="text" />
            <textarea placeholder='Message' className={styles.message} type="text" />
            <button>Send</button>
          </div>
       </div>
      </div>
    </div>
  );
}
 
export default Contact;