import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuote from "./components/DisplayQuote";
import LoadingSpinner from "./components/LoadingSpinner";

const sampleEmployee = {
    character: "Homer Simpson",
    characterDirection: "Right",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    quote: "I hope I didn't brain my damage."
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            quote: sampleEmployee,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        /*
          Begin by setting loading = true, and use the callback function
          of setState() to make the ajax request. Set loading = false after
          the request completes.
        */
        this.setState({ loading: true }, () => {
            // Send the request
            axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
                // Extract the DATA from the received response
                .then(response => response.data)
                // Use this data to update the state
                .then(data => {
                    console.log(data[0]);
                    this.setState({
                        loading: false,
                        quote: data[0],
                    });
                });
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="App">
                {loading ? <LoadingSpinner /> : <DisplayQuote quote={this.state.quote}/>}
                {loading ? '' : <button type="button" onClick={this.onClick}>Get quote</button>}
            </div>
        );
    }
}

export default App;
