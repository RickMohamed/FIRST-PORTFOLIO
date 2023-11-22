import styles from '../styles/Services.module.css';
import { useState } from 'react';


const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        title: "Web Design",
        desc:
          "As a seasoned software engineer, I bring a unique blend of technical proficiency and creative flair to every web design project. Crafting visually stunning and highly functional websites is not just a job; it's a passion. My web design services are tailored to meet the diverse needs of businesses and individuals seeking a compelling online presence.",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        title: "Web Development",
        desc:
        "Unlock the full potential of the web with my comprehensive web development services. As a seasoned software engineer, I specialize in building tailored web solutions that seamlessly blend functionality, performance, and user experience. From dynamic web applications to responsive websites, I bring technical excellence to every line of code.",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        title: "Branding",
        desc:
        "In the dynamic digital landscape, a strong brand identity is the cornerstone of success. As a software engineer with a keen eye for design, I specialize in crafting distinctive and impactful brand identities that resonate with your audience. Elevate your brand with my comprehensive branding services designed to leave a lasting impression.",
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
      <div className={styles.works} id="services">
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className={styles.container}>
              <div className={styles.item}>
                <div className={styles.left}>
                  <div className={styles.leftContainer}>
                    
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
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
 
export default Services;