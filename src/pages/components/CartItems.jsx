import { useContext } from "react"
import styles from "./CartItems.module.css"
import PropsTypes from "prop-types"
import { Contexts } from "../../components/Contexts"

CartItems.propTypes = {
  id: PropsTypes.string,
  image: PropsTypes.string,
  title: PropsTypes.string,
  description: PropsTypes.string,
  price: PropsTypes.number,
  handleAddToCart: PropsTypes.func,
}

export function CartItems({ id, image, title, price }) {
  const { deleteItemCart } = useContext(Contexts)

  function handleDelete() {
    deleteItemCart(id)
  }

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <span>R$ {price}</span>
      </div>

      <div className={styles.control}>
        <button>+</button>
        <span>5</span>
        <button onClick={handleDelete}>-</button>
      </div>
    </div>
  )
}
