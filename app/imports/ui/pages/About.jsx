import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {


    const aboutSlogan ={
      fontSize:'30px',
      position: 'absolute',
      top: '80%',
      color: '#2b7a78',
      backgroundColor: 'black',
      backgroundSize: '500px'
    };

    const aboutFont = {
      position: 'absolute',
      fontSize: '18px',
      top: '87%',
      color: '#def2f1'
    };

  // .slogan1 {
  //     font-family:Helvetica, Arial, "sans-serif";
  //     font-size: 40px;
  //     color: white;
  //     position: absolute;
  //     top: 50%;
  //     left:5%
  //   }
  //
  // .about-p-font{
  //     font-family:Helvetica, Arial, "sans-serif";
  //     font-size: 18px;
  //     font-weight: lighter;
  //     color: white;
  //     position: absolute;
  //     top: 57%;
  //     left:5%;
  //     margin-right: 10%;
  //   }

    return (
      <div>
        <Grid container divided='vertically' textAlign='center'>
          <Header style={aboutSlogan}>
            <b>ABOUT BUDGET BUDDY</b>
          </Header>
          <Header style={aboutFont}> We understand how hard it is to keep track of your own expenses and spending
            habits. BudgetBuddy is a tool intended to help with that. Each month, BudgetBuddy will generate a monthly
            report based off of your expenses. Compiled reports contain a total of your expenses and report the user's
            spending habits. All you have to do is log down your online expenses and we will do the rest.
          </Header>
          <Grid/>
        </Grid>
      </div>
    );
  }
}

export default About;
