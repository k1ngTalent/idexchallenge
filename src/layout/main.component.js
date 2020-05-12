import Profile from "../pages/profile.component";
import React from 'react';
import Help from "../pages/help.component";
import { Switch, Route,Redirect } from 'react-router-dom';
export default function Main(){
    return(
   <div className="content">
 <Switch>
             <Route path='/'
                    exact
                    component={Profile}
                  />
                  <Route path='/profile'
                    exact
                    component={Profile}
                  />
                  <Route path='/contact'
                    component={Help}
                  />
                  <Redirect from='*' to='/' />
                </Switch>
   </div>
       
        )
}

