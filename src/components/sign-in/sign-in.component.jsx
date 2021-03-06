import React from 'react';
/*
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
*/
class SignIn extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                email:'',
                password:''
            }
        }
    
        handleSubmit = event => {
            //this function is used to handle the submit event 
            event.preventDefault();
    
            this.setState({email:'',password:''})
        }
    
        handleChange = event => {
            //this function is used to handle the changes in the password field
            const {value,name} = event.target.value;
    
    
            this.setState({[name]:value});
        }
    
    
        render(){
            return(
                <div className="sign-in">
                    <h2>I already have an account</h2>
    
                    <form onSubmit={this.handleSubmit}>
                        <pre>
                    <label>Email</label>

                               <input name="email" type="email" value={this.state.email} required />
                         <br/>
                         <br/>
                         <br/>
            <label>Password</label>

                        <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required />
                        <br/>
                         <br/><br/>
                         <br/>
                        <input type="submit" value="Submit Form"/>
                        </pre>
                    </form>
    
                </div>
            )
        }
    }
    
    export default SignIn; 