import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Result from './Result'
import useValidation from '../validations/useValidation'


class NameForm extends Component {
    constructor(props) {
        super(props);
        useValidation.isValidName('mehtab')
        this.state = {
            value: '',
            resumedata: '',
            jobdescription: '',
            jobscore: 0,
            validJobdescription: { isValid: true, errorMsg: "" },
            validResumedata: { isValid: true, errorMsg: "" }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangejob = this.handleChangejob.bind(this);
    }

    handleChange(event) {
        this.setState({ resumedata: event.target.value });
        const res = useValidation.isValidResumeData(event.target.value)
        console.log('res resume', res)
        this.setState({
            validResumedata: res
        })

    }
    handleChangejob(event) {
        this.setState({ jobdescription: event.target.value });
        const res = useValidation.isValidJobDescription(event.target.value)
        console.log('res - jd', res)
        this.setState({
            validJobdescription: res
        })
    }
    // TODO
    // showValidation(){
    //     return li
    // }
    handleSubmit(event) {
        event.preventDefault();
        
        console.log('this.state.validResumedata.isValid', this.state.validResumedata.isValid)
        console.log('this.state.validJobdescription.isValid', this.state.validJobdescription.isValid)
        if (this.state.validJobdescription.isValid && this.state.validResumedata.isValid) {
            //here we will fetch the Job Score Api 
            var formdata = new FormData();
            formdata.append("ResumeData", this.state.resumedata);
            formdata.append("JD", this.state.jobdescription);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://blooming-tor-44992.herokuapp.com/jobscore", requestOptions)
                .then(async response => {
                    let r = await response.text()
                    console.log('r', r)
                    this.setState({
                        jobscore: r
                    })
                })
        }

    }

    render() {

        return (

            <div className="container">
                <div className="row">
                    <Result jobscore={this.state.jobscore} />
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="resumedata">
                                <Form.Control as="textarea" rows={10} value={this.state.resumedata} onChange={this.handleChange} placeholder="Please paste your resume here" />
                            </Form.Group>
                            <ol className="text-danger">
                                {!this.state.validResumedata.isValid &&
                                    this.state.validResumedata.errorMsg.map(msg => {
                                        return (
                                            <li>
                                                {msg}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                        <div className="col">
                            <Form.Group controlId="jobdescription">
                                <Form.Control as="textarea" rows={10} value={this.state.jobdescription} onChange={this.handleChangejob} placeholder="Please paste job description here" />
                            </Form.Group>
                            <ol className="text-danger">
                                {!this.state.validJobdescription.isValid &&
                                    this.state.validJobdescription.errorMsg.map(msg => {
                                        return (

                                            <li>
                                                {msg}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="row p-3">

                        <input className="btn btn-success" type="submit" value="Submit" />

                    </div>



                </Form>
            </div>)
    }
}


export default NameForm