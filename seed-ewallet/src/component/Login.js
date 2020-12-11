import React from 'react'
import LoginAuth from './auth'


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password:''};
        localStorage.setItem("isLoggingIn", 'false');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetLogin(){
        localStorage.setItem("isLoggingIn", 'false');
        localStorage.setItem('UserIsLoggedIn', 'false');
        localStorage.setItem('UserInfo', null);
        this.forceUpdate();
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        const user = this.state.username;
        const pw = this.state.password;
        const vFields = [{user}, {pw}];
        if (!vFields.every((field) => Object.values(field)[0] !== ''))  // Validation
            alert('Missing Username or password!');
        else
        {
            localStorage.setItem("isLoggingIn", 'true');
            this.forceUpdate();
        }
        event.preventDefault();
    }

    render() {
        if (localStorage.getItem('UserIsLoggedIn') == 'true')
        {
            let userInfo = JSON.parse(localStorage.getItem('UserInfo'));
            if (userInfo)
            {
                return (
                    <div>
                        <ul>
                            <li>Status: Logged in</li>
                            <li>Name: {userInfo.firstName} {userInfo.lastName}</li>
                            <li>Nric: {userInfo.nric}</li>
                            <li>Gender: {userInfo.gender}</li>
                            <li>Age: {userInfo.age}</li>
                            <li>Address: {userInfo.address}</li>
                            <li>Email: {userInfo.email}</li>
                        </ul>
                        <button onClick={()=>this.resetLogin()}>Logout</button>
                    </div>
                    );
            }
        }
        else if (localStorage.getItem("isLoggingIn") == 'true') 
        {
            localStorage.setItem("isLoggingIn", 'false'); 
            return (
                <div>
                    <LoginAuth username={this.state.username} password={this.state.password}></LoginAuth>
                    <button onClick={()=>this.resetLogin()}>Logout</button>
                </div>);
        }

        

        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Login:
                <input name='username' type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Username"/> <br />
              </label>
              <label>
                Password:
                <input name='password' type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Password"/> <br />
              </label>
              <input type="submit" value="Submit" />
            </form>
            )
    }

}

export default LoginForm;