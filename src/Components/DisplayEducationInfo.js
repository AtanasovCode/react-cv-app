import React from 'react';
import Input from '../Input';
import '../styles/EducationInfo.css';


const initialValues = {
    displayInfo: 0,
    school: 'Example College',
    yearStart: '2019',
    yearEnd: '2020',
    degree: 'Example Degree',
}

class DisplayEducationInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialValues
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = ({target: {name, value} }) => {
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        const {school, yearStart, yearEnd, degree } = this.state;
        if(
            !school 
            || !degree 
            || !yearStart 
            || !yearEnd
            ){
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
                <form className="form-container container">
                    <div className="form-heading">
                        <h1>Education</h1>
                        <img
                            src={require("../../src/assets/addition.png")}
                            alt="add-icon"
                            className="add-icon"
                            onClick={this.handleSubmit}
                        />
                    </div>
                    <div className="input-container">
                        <Input labelName="University:" type="text" name="school" onChange={this.handleChange} />
                        <Input labelName="Degree:" type="text" name="degree" onChange={this.handleChange} />
                        <Input labelName="Started:" type="text" name="yearStart" onChange={this.handleChange} />
                        <Input labelName="Finished:" type="number" name="yearEnd" onChange={this.handleChange} />
                    </div>
                </form>
            );
        } else {
            return (
                <div className="displayed-container container">
                    <div className="displayed-heading">
                        <h1>Education</h1>
                        <img
                            src={require("../../src/assets/edit.png")}
                            alt="edit-icon"
                            className="edit-icon"
                            onClick={this.handleSubmit}
                        />
                    </div>
                    <div className="displayed-info">
                        <div> <h2>{this.state.school}</h2> </div>
                        <div> Degree: <h4>{this.state.degree}</h4> </div>
                        <div> Started: {this.state.yearStart} </div>
                        <div> Finished: {this.state.yearEnd} </div>
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

export default DisplayEducationInfo;