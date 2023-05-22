import styles from "./Cart.module.css"
import { useContext } from "react"
import { CartItems } from "./components/CartItems"
import { Contexts } from "../components/Contexts"
import { Header } from "../components/Header"

export function Cart() {
  const { cart } = useContext(Contexts)
  return (
    <div className={styles.container}>
      <Header />

      <main>
        {cart.length === 0 ? (
          "Carrinho vazio"
        ) : (
          <div className={styles.wrapper}>
            {cart.map((item) => (
              <CartItems
                key={item.id}
                id={item.id}
                image={item.thumbnail}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
