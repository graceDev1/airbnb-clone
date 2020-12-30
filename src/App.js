import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      {/* Home */}
      <Router>
      <Header/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={SearchPage}/>
      </Switch>
     
     
        {/* Header  */}
        {/* Banner */}
          {/* Search */}
        {/* Cards */}
        {/* Footer */}
        <Footer/>
      {/* Search pages */}
        {/*  */}
      </Router>
    </div>
  );
}

export default App;
