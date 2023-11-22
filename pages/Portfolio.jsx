import styles from '../styles/portfolio.module.css'
import { useEffect, useState } from "react";
import PortfolioList from '../pages/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
} from "../data";



const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
    
  ];


  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      
      case "design":
        setData(designPortfolio);
        break;
      
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


  return (
    <div className={styles.portfolio} id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.item}>
            <img
              src={item.img}
              alt=""
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Portfolio;