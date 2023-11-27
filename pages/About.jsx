import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <h1>About</h1>
      <div className={styles.container}>

          
      <div className={styles.card} id="card">
          <div className={styles.cardContent}>
          <h2>My Profession</h2>

<p>
    
I am an passionate and dedicated software engineer boasting 8 months of hands-on experience. 
Proficient in crafting user-friendly, dependable, and responsive websites,
 I leverage cutting-edge web development technologies like React, Gatsby, and Next.js.
 <br /><br />
  My work reflects a meticulous attention to detail, and I continually seek innovative ways to optimize my clients' projects.
   Punctuality is my hallmark—I consistently deliver projects well ahead of deadlines.
   <br />
 If you envision a collaborative effort, I invite you to get in touch.
</p>
          </div>
        </div>


      <div className={styles.card} id="card">
          <div className={styles.cardContent}>
            <h2>My Character</h2>
            <p>
              To start off, I am a very curious and skeptical lad. I focus on asking the
              right questions and approaching problems from the bottom up.
              <br /><br />
              Naturally, I would prefer to be a leader rather than a follower,
              but I have no problem following instructions either.
              I work well with teams, even though I work better by myself.
              <br /><br />
              I have an entrepreneurial mindset, and similarly,
              I am wildly fascinated by the workings of the universe and the
              development of technologies such as AI and Robotics. I like to
              consider myself a physicist and a technology enthusiast.
            </p>
          </div>
        </div> 
      
      </div>
    </div>
  );
};

export default About;
