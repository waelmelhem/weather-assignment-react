import React from 'react';
import './App.scss'
import "./App1.css"
import Nav from './Components/Nav';
import Main from './Components/Main';
import List from './Components/List';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "list": [],
      "city": "",
      "theem":""
    };
  }
  getData(list, city,theem) {
    this.setState({
      "list": list,
      "city": city,
      "theem":theem
    });
  }
  render() {

    return (
      <div className={"app "+this.state.theem}>
        <header className="app__header">
          <Nav getData={this.getData.bind(this)} />
        </header>
        <main className="app__main">
          {this.state.list.length ?
            <div>
              <Main data={this.state.list[0]}/>
              <List list={this.state.list} />
            </div>
            : null
            }
        </main>
      </div>
    );
  }
}


export default App;
