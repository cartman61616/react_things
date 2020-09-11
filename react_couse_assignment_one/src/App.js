import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
    state = {
        username: 'Snorlax'
    }

    nameChangeHandler = (event) => {
        this.setState({
            username: event.target.value,
            otherState: 'some value'
        });
    }

    render() {
        return (
            <div className="App">
                <UserOutput username={this.state.username}/>
                <UserInput changed={this.nameChangeHandler}/>
            </div>
        );
    }
}

export default App;
