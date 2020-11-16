import React, { Component } from 'react';
class WordsCounter extends Component {
    constructor(props) {
        console.log('props', props)
        super(props);
        this.state = { resumewords:0,
            jdwords:0
        }
    }
    render() {
        return (<div>
            <h3 >Resume Words &nbsp; 
                <span  >
                    {this.props.resumewords} 
                </span>
           
               
            </h3>
<h3> Job Description Words <span  >
                    {this.props.jdwords} 
                </span></h3>
        </div>);
    }
}

export default WordsCounter;