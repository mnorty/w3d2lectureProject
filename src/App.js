import React,{Component} from 'react';
import './App.css';
import Header from './Components/Header'
import SelectedColor from './Components/SelectedColor';


class App extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      selectedColor: 'aquamarine'
    }
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this)
  }

  handleUsernameUpdate(e){
    this.setState({username: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <Header name={this.state.username}method={this.handleUsernameUpdate}/>
        <SelectedColor color={this.state.selectedColor}/>
      </div>
    );
  }
}

export default App;
