import { Outlet } from "react-router-dom"
import { Header } from "../components"

const Pages = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export { Pages }
