import React, { Component } from 'react';

class QuestionBox extends Component {
    render() {
        return(
            <ol>
                {this.props.questionSubmit.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        );
    }
}

export default QuestionBox;