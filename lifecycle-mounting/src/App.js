import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called");
    this.state = { favoritecolor: "red!" };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props);
  //   return { favoritecolor: props.favcol };
  // }

  componentDidMount() {
    console.log('Component Did Mount Called')
    setTimeout(() => {
      this.setState({favoritecolor: "yellow!"})
    }, 3000)
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

export default App;
