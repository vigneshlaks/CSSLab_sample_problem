import React from 'react';
import Button from './Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  //handler goes here
  handleClick() {
    this.setState(prevState => ({
      buttonClicked: !prevState.buttonClicked
    }));
  }

  render() {
    
    //const buttonText = this.state.buttonClicked ? 'thanks' : 'click me';

    return (
      <div>
        <p>Greetings!</p>
        <Button  onClick={this.handleClick}
                 buttonText={this.state.buttonClicked ? "thanks!" : "click me!"} />
      </div>
    );
  }
}