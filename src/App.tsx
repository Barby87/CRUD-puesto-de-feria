import './App.css';
import MyFair from './containers/myFair/MyFair';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './containers/about/About';
import Home from './containers/home/Home';
import NotFound from './containers/notFound.tsx/NotFound';
import NavBar from './containers/navBar/NavBar';
import Comments from './containers/comments/Comments';
import LoginContextManager from './contexts/LoginContextManager';
import Login from './containers/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import CreateProduct from './containers/createProduct/CreateProduct';
import RemoveProduct from './components/removeProduct/RemoveProduct';
import UpdateProduct from './containers/updateProduct/UpdateProduct';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
   <div className="App container">
     <LoginContextManager>
        <Provider store={store}>
          <Router>
            <NavBar/>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              {/* Otra forma */}
              {/* <Route path="/" exact component={About}/> */}
              <Route path="/about" exact>
                <About/>
              </Route>
              <Route path="/list" exact>
                <MyFair/>
              </Route>
              <Route path="/create" exact>
                <PrivateRoute path="/create" exact component={CreateProduct}/>
              </Route>    
              <Route path="/remove/:id" exact>
                <PrivateRoute path="/remove/:id" exact component={RemoveProduct}/>
              </Route>  
              <Route path="/update/:id" exact>
                <PrivateRoute path="/update/:id" exact component={UpdateProduct}/>
              </Route>          
              <Route path="/comments/:id" exact>
                <Comments/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              {/* <Route path="/privateHome" exact>
                <PrivateRoute path="/privateHome" exact component={PrivateHome}/>
              </Route> */}
              <Route path="*" exact>
                <NotFound/>
              </Route>
            </Switch>
          </Router>
        </Provider>
       {/* </FairContextManager> */}
     </LoginContextManager>
   </div>
  );
}

export default App;
