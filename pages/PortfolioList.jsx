import styles from '../styles/portfolioList.module.css'

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <>
    <li
      className={active ? styles.portfolioListactive : styles.portfolioList}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
    </>
  )
  ;
}
