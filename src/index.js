import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//This is the class way of creating the button with the increment counter
 class HelloWorld extends React.Component {
     constructor() {
       super();
       this.state = {counter: 0};
     }
     incrementCounter = () => {
       return this.setState({counter: this.state.counter + 1})
     }
     
     render() {
       const {
         counter
       } = this.state
       return (
         <div>
           Counter: {counter}
           <br/>
           <button onClick={this.incrementCounter}>Increment</button>
           <hr />
        
         </div>
       )
     }
   }

  


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
