import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";



class App extends Component {
    state = {
        persons: [
            { name: 'Ferb', age: 30 },
            { name: 'Phineas', age: 31}
        ]
    }

    switchNameHandler = (newName) => {
        console.log("clicker")
        this.setState({
            persons: [
                { name: newName, age: 25 },
                { name: 'Phin', age: 26}
            ],
            otherState: 'other value'
        });
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Steve', age: 25 },
                { name: event.target.value, age: 3}
            ],
            otherState: 'other value'
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>Test</h1>
                <p>test2</p>
                <button onClick={ ()=> this.switchNameHandler('Ferbitude')} style={style}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Agent P')}
                    changed={this.nameChangeHandler}>
                    Perry the Platypus </Person>
            </div>
        );
    }
}

export default App;

/* Same component using reactHooks
const app = props => {
    const [ personState, setPersonState ] = useState({
        persons: [
            {name: 'Ferb', age: 30},
            {name: 'Phineas', age: 31}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        console.log("clicker")
        setPersonState({
            persons: [
                {name: 'Ferbman', age: 30},
                {name: 'Phin', age: 31}
            ],
            otherState: personState.otherState
        });
    }

    return (
        <div className="App">
            <h1>Test</h1>
            <p>test2</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}> Perry the Platypus </Person>
        </div>
    );
}

export default app;
 */