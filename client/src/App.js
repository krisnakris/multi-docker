import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <br/>
          <Link to="/otherpage">Other Pages</Link>
        </header>
        <div>
          <Route exact path='/' component = { Fib }></Route>
          <Route path='/otherpage' component = { OtherPage }></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
