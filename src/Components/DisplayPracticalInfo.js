import React from 'react';
import Input from '../Input';
import '../styles/PracticalInfo.css';

class DisplayPracticalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: 0,
            company: '',
            yearStart: '',
            yearEnd: '',
            position: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        const {school, yearStart, yearEnd, degree } = this.state;
        if(!school || !degree || !yearStart || !yearEnd){
            return {displayInfo: 0}
        };
        e.preventDefault();
        this.setState(() => {
            if (this.state.displayInfo === 0) {
                return { displayInfo: 1 }
            }

            return { displayInfo: 0 }
        })
    }


    display = () => {
        if (this.state.displayInfo === 0) {
            return (
                <form onSubmit={this.handleSubmit} className="form-container container practical-full-container">
                    <div className="form-heading">
                        <h1>Practical Experience</h1>
                        <img
                            src={require("../../src/assets/addition.png")}
                            alt="add-icon"
                            className="add-icon"
                        />
                    </div>
                    <div className="input-container">
                        <Input labelName="Company:" type="text" name="company" onChange={this.handleChange} />
                        <Input labelName="Position:" type="text" name="position" onChange={this.handleChange} />
                        <Input labelName="Started:" type="text" name="yearStart" onChange={this.handleChange} />
                        <Input labelName="Left:" type="number" name="yearEnd" onChange={this.handleChange} />
                    </div>
                </form>
            );
        } else {
            return (
                <div className="displayed-container container practical-full-container">
                    <div className="displayed-heading">
                        <h1>Practical Experience</h1>
                        <img
                            src={require("../../src/assets/addition.png")}
                            alt="add-icon"
                            className="add-icon"
                            onClick={this.handleSubmit}
                        />
                    </div>
                    <div className="practical-displayed-info">
                        <div className="practical-company">
                            <div className="company-name">
                                {this.state.company}
                                <img
                                    src={require("../../src/assets/edit.png")}
                                    alt="edit-icon"
                                    className="edit-icon"
                                    onClick={this.handleSubmit}
                                />
                            </div>
                            <div className="position"> Position: {this.state.position} </div>
                        </div>
                        <div className="practical-info">
                            <div> Started: {this.state.yearStart} </div>
                            <div> Left: {this.state.yearEnd} </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.display()}
            </div>
        );
    }
}

export default DisplayPracticalInfo;