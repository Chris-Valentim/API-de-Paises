import 'tailwindcss/tailwind.css'
import './components/styles/global.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Card from "./components/Card/";
import DetailedCountry from "./components/DetailedCountry/";

function App() {
  return (
    <div>
      <Router>
        <Card />
        <DetailedCountry />
      </Router>
    </div>
  );
}

export default App;
