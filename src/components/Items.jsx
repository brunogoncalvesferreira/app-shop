import { useContext } from "react"
import styles from "./Items.module.css"
import PropsTypes from "prop-types"
import { Contexts } from "./Contexts"

Items.propTypes = {
  item: PropsTypes.object,
  id: PropsTypes.string,
  image: PropsTypes.string,
  title: PropsTypes.string,
  description: PropsTypes.string,
  price: PropsTypes.number,
  handleAddToCart: PropsTypes.func,
}

export function Items({ item, image, title, price }) {
  const { addItemToCart } = useContext(Contexts)

  function handleAddCart() {
    addItemToCart(item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <span>R$ {price.toFixed(2)}</span>
        <button onClick={handleAddCart}>add to cart</button>
      </div>
    </div>
  )
}
