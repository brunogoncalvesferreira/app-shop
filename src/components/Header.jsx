import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import { ShoppingBag, ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react"
import { Contexts } from "./Contexts"

export function Header() {
  const { CartItemsTotal } = useContext(Contexts)
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <ShoppingBag />
            Shop
          </NavLink>
        </div>

        <ul>
          <NavLink to={"/carrinho"}>
            Cart <ShoppingCart size={20} />
            <span>{CartItemsTotal}</span>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
