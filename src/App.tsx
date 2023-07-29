import 'tailwindcss/tailwind.css'
import { Header } from "./components/Header/index";
import { getFlags } from './api/service/flags';
import { useFlags } from './hooks/useFlags';
function App() {
  // const flags = useFlags()
  console.log(getFlags())
  return (
    <div className="dark:bghsl(207, 26%, 17%)">
      <Header />
    </div>
  );
}

export default App;
