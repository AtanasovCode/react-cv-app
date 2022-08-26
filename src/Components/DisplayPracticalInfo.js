import React from 'react';
import Input from '../Input';
import '../styles/PracticalInfo.css';


const initialValues = {
    displayInfo: 0,
    company: 'Example Inc',
    yearStart: '2019',
    yearEnd: '2020',
    position: 'Example Position',
    description: 'Short description of responsibilities at your previous job',
}

class DisplayPracticalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialValues
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        const { company, yearStart, yearEnd, position, description } = this.state;
        if (
            !company
            || !yearStart
            || !yearEnd
            || !position
            || !description
        ) {
            return { displayInfo: 0 }
        } else {
            e.preventDefault();
            this.setState(() => {
                if (this.state.displayInfo === 0) {
                    return { displayInfo: 1 }
                }
                return { displayInfo: 0 }
            })
        }
    }


    display = () => {
        if (this.state.displayInfo === 0) {
            return (
                <form className="practical-form-container practical-container">
                    <div className="form-heading">
                        <h1>Practical Experience</h1>
                        <img
                            src={require("../../src/assets/addition.png")}
                            alt="add-icon"
                            className="add-icon"
                            onClick={this.handleSubmit}
                        />
                    </div>
                    <div className="input-container">
                        <Input labelName="Company:" type="text" name="company" onChange={this.handleChange} />
                        <Input labelName="Position:" type="text" name="position" onChange={this.handleChange} />
                        <Input labelName="Started:" type="text" name="yearStart" onChange={this.handleChange} />
                        <Input labelName="Left:" type="number" name="yearEnd" onChange={this.handleChange} />
                        <textarea
                            placeholder="Short Description Of The Responsibilities You Had..."
                            maxLength="250"
                            onChange={this.handleChange}
                            name="description"
                            className="practical-description"
                        />
                    </div>
                </form>
            );
        } else {
            return (
                <div className="displayed-practical-container  practical-container">
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
                                <h2>{this.state.company}</h2>
                                <img
                                    src={require("../../src/assets/edit.png")}
                                    alt="edit-icon"
                                    className="edit-icon"
                                    onClick={this.handleSubmit}
                                />
                            </div>
                            <div className="practical-info">
                                <div practical-experience-container>
                                    <div className="position">
                                        Worked as a {this.state.position}
                                    </div>
                                    <div className="displayed-practical-description">
                                        {this.state.description}
                                    </div>
                                </div>
                                <div className="year-container">
                                    <div> Started: {this.state.yearStart} </div>
                                    <div> Left: {this.state.yearEnd} </div>
                                </div>
                            </div>
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