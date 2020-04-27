import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {
    return (
        <Grid fluid container>
          <Image  className="ui fluid image"
                  src={'images/about-background.png'}/>

          <p className="slogan1">
            <b>ABOUT BUDGET BUDDY</b>
          </p>
          <p className="about-p-font"> We understand how hard it is to keep track of your own expenses and spending
            habits. BudgetBuddy is a tool intended to help with that. Each month, BudgetBuddy will generate a monthly
            report based off of your expenses. Compiled reports contain a total of your expenses and report the user's
            spending habits. All you have to do is log down your online expenses and we will do the rest.
          </p>
        </Grid>
    );
  }
}

export default About;
