import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import AddBudget from './pages/add-budget.js';
import Expenses from './pages/expenses.js';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='Site'>
          <NavBar/>
          <div className='Site-content'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/add-budget" component={AddBudget}/>
              <Route exact path="/expenses" component={Expenses}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>


//           <Switch>
//             {/*<Route exact path="/userprofile" component={UserProfile}/>*/}
//             {/*<Route path="/signin" component={Signin}/>*/}
//             {/*<Route path="/signup" component={Signup}/>*/}
//             {/*<Route path="/createuserprofile" component={CreateUserProfile}/>*/}
//
//             {/*<ProtectedRoute path="/edituserprofile/:_id" component={EditUserProfile}/>*/}
//             {/*<ProtectedRoute path="/userprofilebyid/:_id" component={UserProfileById}/>*/}
//             {/*<AdminProtectedRoute path="/admin" component={AdminPage}/>*/}
//             {/*<AdminProtectedRoute path="/edit-user/:_id" component={EditUserAdmin}/>*/}
//             {/*<AdminProtectedRoute path="/edit-category/:_id" component={EditCategoryAdmin}/>*/}
//             {/*<AdminProtectedRoute path="/edit-item/:_id" component={EditItemAdmin}/>*/}
//             {/*<AdminProtectedRoute path="/edit-report/:_id" component={EditReportAdmin}/>*/}
//             {/*<ProtectedRoute path="/signout" component={Signout}/>*/}
//             {/*<Route component={NotFound}/>*/}
//           </Switch>

    );
  }
}

export default App;