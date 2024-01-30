
import './App.css';
import Create from './Create';
import Navbar  from './Navbar';
import PostDetails from './PostDetails';
import Home from './home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';

export default function  App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
        </Switch>
      </div>   
      </div>
    </Router>
  );
}

///export default App;
