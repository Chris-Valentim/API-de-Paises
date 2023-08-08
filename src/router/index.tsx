import { createBrowserRouter } from 'react-router-dom'

import { CountryDetails } from '../page/Detailed/index'
import { Pages } from '../page'
import { Home } from '../page/Home'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:countryName",
        element: <CountryDetails />
      }
    ]
  },
])

export default routes
