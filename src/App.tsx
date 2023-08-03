import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom';
import './components/styles/global.css';
import routes from './router';

function App() {

  return ( //render info na tela
    <div className="dark:bghsl(207, 26%, 17%)">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
