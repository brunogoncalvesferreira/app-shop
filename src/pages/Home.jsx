import { Header } from "../components/Header"
import { Items } from "../components/Items"
import styles from "./Home.module.css"
import { useContext } from "react"
import { Contexts } from "../components/Contexts"
import { Loading } from "../components/Loading"

export function Home() {
  const { items } = useContext(Contexts)

  return (
    <div className={styles.container}>
      <Header />

      <main>
        {items.length === 0 ? (
          <Loading />
        ) : (
          <div>
            <h1>Lista de produtos</h1>
            <div className={styles.wrapper}>
              {items.map((item) => (
                <Items
                  key={item.id}
                  item={item}
                  id={item.id}
                  image={item.thumbnail}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
