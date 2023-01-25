import styles from '../styles/contact.module.css';
import { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.left}>
        <img src="shake.svg" alt="" />
      </div>
      <div className={styles.right}>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
 
export default Contact;