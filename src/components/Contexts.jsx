import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

export const Contexts = createContext({})

export function ContextProvider({ children }) {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLB/search?q=celular"
      )
      const data = await response.json()
      console.log(data.results)
      setItems(data.results)
    }
    fetchData()
  }, [])

  function addItemToCart(item) {
    setCart((prevState) => [...prevState, item])
  }

  function deleteItemCart(itemID) {
    const actionDelete = cart.filter((item) => item.id !== itemID)
    setCart(actionDelete)
  }

  const CartItemsTotal = cart.length

  const contextsValues = {
    items,
    cart,
    addItemToCart,
    CartItemsTotal,
    deleteItemCart,
  }
  return (
    <Contexts.Provider value={contextsValues}>{children}</Contexts.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

/* https://api.mercadolibre.com/sites/MBL/search?=celular */
