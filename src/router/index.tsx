import { createBrowserRouter } from 'react-router-dom'

import { DetailedCountry } from '../page/Detailed/index'
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
        path: "/detailedcountry",
        element: <DetailedCountry />
      }
    ]
  },
])

export default routes
