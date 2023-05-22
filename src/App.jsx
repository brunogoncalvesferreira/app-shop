import { BrowserRouter } from "react-router-dom"
import styles from "./App.module.css"
import { Router } from "./Router"
import { ContextProvider } from "./components/Contexts"

export function App() {
  return (
    <div className={styles.container}>
      <ContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </div>
  )
}
