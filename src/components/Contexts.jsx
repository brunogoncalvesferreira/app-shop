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
      setItems(data.results)
    }
    fetchData()
  }, [])

  function addItemsToCart(itemID) {
    const existItemToCart = cart.find((item) => item.id === itemID.id)
    if (existItemToCart) {
      const updateItemsCart = cart.map((items) => {
        if (items.id === itemID.id) {
          return {
            ...items,
            quantity: items.quantity + 1,
          }
        }
        return items
      })
      setCart(updateItemsCart)
    } else {
      const newItem = {
        ...itemID,
        quantity: 1,
      }
      setCart([...cart, newItem])
    }
  }

  function removeItemsToCart(itemID) {
    const existItemToCart = cart.find((item) => item.id === itemID.id)
    if (existItemToCart.quantity === 1) {
      const updateItemsCart = cart.filter((items) => items.id !== itemID.id)
      setCart(updateItemsCart)
    } else {
      const updateCartItems = cart.map((items) => {
        if (items.id === itemID.id) {
          return { ...items, quantity: items.quantity - 1 }
        }
        return items
      })
      setCart(updateCartItems)
    }
  }

  function sumTotalCart() {
    const sumItemsCart = cart.reduce(
      (acc, items) => acc + items.quantity * items.price,
      0
    )

    return sumItemsCart
  }

  const ItemsLength = cart.map((item) => item).length

  const contextsValues = {
    items,
    cart,
    ItemsLength,
    addItemsToCart,
    removeItemsToCart,
    sumTotalCart,
  }
  return (
    <Contexts.Provider value={contextsValues}>{children}</Contexts.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

/* https://api.mercadolibre.com/sites/MBL/search?=celular */
