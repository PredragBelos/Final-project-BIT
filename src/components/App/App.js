import { Route } from 'react-router';
import HomePage from '../Home page/homePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/home" component={HomePage}/>
    </div>
  );
}

export default App;
