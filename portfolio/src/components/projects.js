import React, { Component } from 'react';
import QuestionBox from './QuestionBox';

class Projects extends Component {
    state = {
        input: '',
        list: [],
        test: "hello, I'm a test"
    }

    onChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({
            list : [...this.state.list, this.state.input],
            input: ''
        })
    }

    render() {
        return(
            <div className="Clicker">
                <header className="Clicker-header">
                    <QuestionBox questionSubmit={this.state.list}/>
                    <form onSubmit={this.onSubmit}>
                        <input placeholder="Leave me a question and I'll email you a response?" value={this.state.input} onChange={this.onChange}/>
                        <br/>
                        <button>Submit a question</button>
                    </form>
                </header>                
            </div>
        );
    }
}

export default Projects;