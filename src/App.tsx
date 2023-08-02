import Card from "./components/Card";
import './components/styles/global.css';

import 'tailwindcss/tailwind.css'
import { Header } from "./components/Header/index";
import { useFlags } from './hooks/useFlags';

function App() {

  const { allFlags }  = useFlags()

  return ( //render info na tela
    <div className="dark:bghsl(207, 26%, 17%)">
      <Header />
      {allFlags.sort().map((item) => (
        <div>
          {item.name.common}
        </div>
      ))} 
    </div>
  );
}

export default App;
