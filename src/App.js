import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/Cards/TinderCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
