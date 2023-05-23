import styles from "./CartItems.module.css"
import PropsTypes from "prop-types"
import { useContext } from "react"
import { Contexts } from "../../components/Contexts"

CartItems.propTypes = {
  items: PropsTypes.object,
  id: PropsTypes.string,
  image: PropsTypes.string,
  title: PropsTypes.string,
  description: PropsTypes.string,
  price: PropsTypes.number,
  handleAddToCart: PropsTypes.func,
}

export function CartItems({ items, image, title, price }) {
  const { addItemsToCart, removeItemsToCart } = useContext(Contexts)

  function handleAdd() {
    addItemsToCart(items)
  }

  function handleRemove() {
    removeItemsToCart(items)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={image} alt={title} />
        <div className={styles.content}>
          <h2>{title}</h2>
          <span>R$ {price.toFixed(2).replace(".", ",")}</span>
        </div>

        <div className={styles.control}>
          <button onClick={handleAdd}>+</button>
          <span>{items.quantity}</span>
          <button onClick={handleRemove}>-</button>
        </div>
      </div>
    </div>
  )
}
