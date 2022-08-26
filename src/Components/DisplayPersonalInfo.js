import React from 'react';
import Input from '../Input';
import '../styles/PersonalInfo.css';

class displayPersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: 0,
            name: '',
            surname: '',
            phone: '',
            mail: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState(() => {
            if (this.state.displayInfo === 0) {
                return { displayInfo: 1 }
            }

            return { displayInfo: 0 }
        })
    }



    display = () => {
        const { name, surname, phone, mail, title, city } = this.state;
        if (this.state.displayInfo === 1) {
            return (
                <div className="personal-form-container">
                    <div className="personal-displayed-container">
                        <div className="personal-heading">
                            <div className="name-container">
                                <h1>{name}{" "}{surname}</h1>
                                <h3 className="title">{title}</h3>
                            </div>
                            <div className="img-container">
                                <img
                                    src={require("../../src/assets/edit.png")}
                                    alt="edit-icon"
                                    className="edit-icon"
                                    onClick={this.handleSubmit}
                                />
                            </div>
                        </div>
                        <div className="other-info-container">
                            <div>Phone: {phone}</div>
                            <div>Mail: {mail}</div>
                            <div>Located: {city}</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="personal-form-container">
                    <div className="form-heading">
                        <h1>Personal Info</h1>
                        <img
                            src={require("../../src/assets/addition.png")}
                            alt="add-icon"
                            className="add-icon"
                        />
                    </div>
                    <div className="personal-input-container">
                        <div>
                            <Input labelName="Name:" type="text" name="name" onChange={this.handleChange} />
                            <Input labelName="Surname:" type="text" name="surname" onChange={this.handleChange} />
                            <Input labelName="Job Title:" type="text" name="title" onChange={this.handleChange} />
                        </div>
                        <div>
                            <Input labelName="Phone:" type="number" name="phone" onChange={this.handleChange} />
                            <Input labelName="E-Mail:" type="text" name="mail" onChange={this.handleChange} />
                            <Input labelName="City:" type="text" name="city" onChange={this.handleChange} />
                        </div>

                    </div>
                </form>
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



export default displayPersonalInfo;