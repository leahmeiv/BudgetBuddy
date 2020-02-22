import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Grid, List} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless inverted className="topmenu">
        <Container>
          {/*<Menu.Item as={'a'} className="logo">*/}
            {/*<Image src=""/>*/}
          {/*</Menu.Item>*/}
          <Menu.Item as={'a'} href={'home.html'} className="right item">Home</Menu.Item>
          <Menu.Item as={'a'} href={'about.html'} >About</Menu.Item>
          <Menu.Item as={'a'} href={'contact.html'}>Contact</Menu.Item>
        </Container>
      </Menu>
    )
  }
}


class BudgetBuddy extends React.Component {
  render() {
    return (
      <div>
        <TopMenu/>
      </div>
    );
  }
}

ReactDOM.render(<BudgetBuddy />, document.getElementById('root'));
