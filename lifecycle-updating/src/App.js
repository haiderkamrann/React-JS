import './App.css';
import React from 'react'
import Getsnap from "./Components/Getsnap"
import Componentdidupdate from "./Components/Componentdidupdate"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }

  // shouldComponentUpdate(){
  //   return false;
  // }

  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <>
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>

      <Getsnap />
      <Componentdidupdate />
      </>
    );
  }
}

export default App;
