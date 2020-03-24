import React, { Component } from "react"
import "./App.css"
import CardList from "./components/CardList"
import SearchBox from './components/SearchBox';
class App extends Component {
  state = {
    monsters: [],
    searchText: ""
  }
  handleChange = e => {
    this.setState({ searchText: e.target.value })
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchText } = this.state
    const filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
      <div className="App">
        <SearchBox handleChange={() => this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
