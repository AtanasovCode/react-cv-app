import React from 'react';
import Input from '../Input';
import '../styles/PersonalInfo.css';



const initialState = {
    displayInfo: 0,
    name: 'John Doe',
    phone: '55511322',
    mail: 'example@example.com',
    title: 'Junior Examplerer',
    city: 'London',
    description: 'A brief description of who you are and your experience',
    linkedin: 'yourlinkedinusername',
    github: 'yourgithubusername',
}

class displayPersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        })
    }


    handleSubmit = (e) => {
        const { name, phone, mail, title, city, description, github, linkedin } = this.state;
        if (
            !name
            || !mail
            || !phone
            || !title
            || !city
            || !description
            || !github
            || !linkedin
        ) {
            console.log(description);
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
        const { name, phone, mail, title, city, github, linkedin, description } = this.state;
        if (this.state.displayInfo === 0) {
            return (
                <form className="personal-form-container">
                    <div className="form-heading">
                        <h1>Personal Info</h1>
                        <img
                            src={require("../../src/assets/addition-personal.png")}
                            alt="add-icon"
                            className="add-icon"
                            onClick={this.handleSubmit}
                        />
                    </div>
                    <div className="personal-input-container">
                        <div>
                            <Input labelName="Full Name" type="text" name="name" onChange={this.handleChange} />
                            <Input labelName="Job Title" type="text" name="title" onChange={this.handleChange} />
                            <textarea
                                maxLength="125"
                                className="personal-desc"
                                name="description"
                                placeholder="Short Description About Yourself..."
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Input labelName="Phone" type="number" name="phone" onChange={this.handleChange} />
                            <Input labelName="E-Mail" type="text" name="mail" onChange={this.handleChange} />
                            <Input labelName="City" type="text" name="city" onChange={this.handleChange} />
                            <Input labelName="LinkedIn" type="text" name="github" onChange={this.handleChange} />
                            <Input labelName="GitHub" type="text" name="linkedin" onChange={this.handleChange} />
                        </div>
                    </div>
                </form>
            );
        } else {
            return (
                <div className="personal-form-container">
                    <div className="personal-displayed-container">
                        <div className="personal-heading">
                            <div className="displayed-heading">
                                <div className="name-container">
                                    <div className="full-name">
                                        {name}
                                        <img
                                            src={require("../../src/assets/edit-personal.png")}
                                            alt="edit-icon"
                                            className="edit-icon"
                                            onClick={this.handleSubmit}
                                        />
                                    </div>
                                    <div className="title">{title}</div>
                                </div>
                            </div>
                            <div className="description-displayed">
                                {description}
                            </div>
                        </div>
                        <div className="other-info-container">
                            <div>
                                <img
                                    src={require("../../src/assets/phone.png")}
                                    alt="phone-icon"
                                    className="icon"
                                />
                                {phone}
                            </div>
                            <div className="mail-container">
                                <img
                                    src={require("../../src/assets/email.png")}
                                    alt="email-icon"
                                    className="icon"
                                />
                                {mail}
                            </div>
                            <div>
                                <img
                                    src={require("../../src/assets/gps.png")}
                                    alt="gps-icon"
                                    className="icon"
                                />
                                {city}
                            </div>
                            <div className="social-container">
                                <img
                                    src={require("../../src/assets/github.png")}
                                    alt="github-icon"
                                    className="icon"
                                />
                                {github}
                            </div>
                            <div className="social-container">
                                <img
                                    src={require("../../src/assets/linkedin.png")}
                                    alt="linkedin-icon"
                                    className="icon"
                                />
                                {linkedin}
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



export default displayPersonalInfo;