import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.css';
import Home from './Home';
import About from './About';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from './Login';
import Signup from './Signup';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
            </Switch>
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