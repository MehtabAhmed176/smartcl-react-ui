import React, { Component } from 'react'


class Result extends Component {
    constructor(props) {
        super(props);
        this.x = 0

    }
    getClass() {
        if (this.props.jobscore > 60) {
            return "text-success"
        }
        if (this.props.jobscore > 30) {
            return "text-warning"
        }
        return "text-danger"
    }
    render() {

        return (
            <div>
                <h2 >Your match with job is &nbsp;
                <span className={this.getClass()} >
                            {this.props.jobscore} %
                </span>
                </h2>
            </div>);
    }
}

export default Result;