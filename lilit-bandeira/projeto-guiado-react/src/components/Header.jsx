import styles from '../styles/components/header.module.css'

const Header = ({ title, image }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </header>
  )
}

export default Header
