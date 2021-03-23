import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/*
	What is JSX? Javascript + XML

	JSX is an XML/HTML like syntax used by React that
	extends your JS so that it can co-exist
	with React.
	The syntax provided by JSX is compiled by Babel
	to transform HTML-like syntax or text into 
	standard JS Objects.

	You can embed JS expression directly via curly braces
*/

// let name = "LeBron James"

// let GOAT = {
//     firstName: "Michael",
//     lastName: "Jordan",
//     MVPs: 5,
//     shootoutChampion: 0
// }

// let shooter = {
//     firstName: "Stephen",
//     lastName: "Curry",
//     MVPs: 2,
//     shootoutChampion: 2
// }

function greatestShooter(object) {
    if (object.shootoutChampion === 2) {
        return <h1>You are one of the best shooters ever.</h1>
    } else {
        return <p>You are not one of the best shooters.</p>
    }
};
// function goatDeterminer(object) {
//     if (object.MVPs === 5) {
//         return object.firstName + ' ' + object.lastName
//     } else {
//         return "You are not Michael Jordan"
//     }
// }

// let myElement = greatestShooter(GOAT)

//This react function allows us to render our elements
// into the page

// Create a react element without the use of JSX

// let myElement3 = React.createElement('h1', { className: 'greeting' }, 'Hello, was created without JSX')

let myElement4 = <h1 className = "greeting"> hello, I was created using JSX.</h1>
ReactDOM.render(
    <App />,
    document.getElementById('root')
);