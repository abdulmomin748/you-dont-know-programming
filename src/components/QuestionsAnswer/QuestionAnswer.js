import React from 'react';
import './QuestionAnswer.css'
const QuestionAnswer = () => {
    return (
        <div className='question-container'>
            <div>
                <h3>Q1.What are the difference between props and state in react?</h3>
                <p>Ans: 
                Props:
                Props are read-only.
                Props are immutable.
                Props allow you to pass data from one component to other components as an argument.

                State:
                State changes can be asynchronous.
                State is mutable.
                State holds information about the components.</p>
            </div>
            <div>
                <h3>Q2.How does react work?</h3>
                <p>Ans: 
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            </div>
            <div>
                <h3>Q2.Uses of UseEffect?</h3>
                <p>Ans: 
                Uses of UseEffect:
                The useEffect   Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;