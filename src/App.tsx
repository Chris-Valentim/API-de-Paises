import { RouterProvider } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import routes from './router';

function App() {
  // Render info na tela
  return (
    <div className="dark:bghsl(207, 26%, 17%)">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
