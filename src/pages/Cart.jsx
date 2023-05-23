import styles from "./Cart.module.css"
import { useContext } from "react"
import { CartItems } from "./components/CartItems"
import { Contexts } from "../components/Contexts"
import { Header } from "../components/Header"

export function Cart() {
  const { cart, sumTotalCart } = useContext(Contexts)

  let totalCart = sumTotalCart()

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <strong>TOTAL: R$ {totalCart.toFixed(2).replace(".", ",")}</strong>
        {cart.length === 0 ? (
          "Seu carrinho está vazinho"
        ) : (
          <div className={styles.wrapper}>
            {cart.map((item) => (
              <CartItems
                key={item.id}
                items={item}
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
