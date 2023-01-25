import styles from '../styles/works.module.css';
import { useState } from 'react';


const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        icon: "mobile.png",
        title: "Web Design",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: "globe.png",
        title: "Mobile Application",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        icon: "writing.png",
        title: "Branding",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
    ];
  
    const handleClick = (way) => {
      way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    
    return (
      <div className={styles.works} id="works">
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className={styles.container}>
              <div className={styles.item}>
                <div className={styles.left}>
                  <div className={styles.leftContainer}>
                    <div className={styles.imgContainer}>
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className={styles.right}>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="arrow.png"
          className={styles.arrowleft}
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="arrow.png"
          className={styles.arrowright}
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    );
}
 
export default Works;