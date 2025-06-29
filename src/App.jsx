import { ReactAbout } from './components/ReactAbout';
import { BenefitsList } from './components/BenefitsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactAbout/>
      <h2>Переваги React</h2>
      <BenefitsList />
    </div>
  );
}

export default App;
