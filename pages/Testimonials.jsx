import styles from '../styles/test.module.css'

const Testimonials = () => {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
      return (
        <div className={styles.testimonials} id="testimonials">
          <h1>Testimonials</h1>
          <div className={styles.container}>
            {data.map((d) => (
              <div className={styles.card}>
                <div className={styles.top}>
                  <img src="right-arrow.png" className={styles.leftimg} alt="" />
                  <img
                    className={styles.userimg}
                    src={d.img}
                    alt=""
                  />
                  <img className={styles.rightimg} src={d.icon} alt="" />
                </div>
                <div className={styles.center}>
                  <p>{d.desc}</p>
                </div>
                <div className={styles.bottom}>
                  <h3>{d.name}</h3>
                  <h4>{d.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
 
export default Testimonials;