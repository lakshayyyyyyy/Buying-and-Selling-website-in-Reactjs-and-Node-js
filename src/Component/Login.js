import React, {Component} from 'react';
import Axios from "axios";
import App from "../App";
import Cb from "./cb";
import Header from "../header/header";
import {BrowserRouter,Route,Link} from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            logged:false
        }
        this.changeuser=this.changeuser.bind(this);
        this.submit=this.submit.bind(this);

    }

    changepass=(event) => {
        this.setState({
            password:event.target.value
        })
    }

    changeuser=(event) => {
            this.setState({
                username:event.target.value
            })
    }

    submit()
    {

    Axios.get("http://yourip:9000").then(response =>{
        this.setState({
            username:response.data,
            logged:true
        });

    }).catch();

    }


    render() {
        if(this.state.logged==true)
        {
            return (
                <div></div>
              //  <Header props={this.state.username}/>
                // <Cb></Cb>
            )
        }

        return (
            <div>

            <div style={{marginTop:"25%",marginLeft:"25%"}}><fieldset style={{width:"50%"}}>
                <form >
                    <label>
                        username:
                    </label>
                    <input type="text" id="username" onChange={this.changeuser} value={this.state.username}></input>
                    <br/>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" onChange={this.changepass}/>
                    <br/>
                    <input type="button" onClick={this.submit} value="login" />
                </form>

            </fieldset>
            </div>
            </div>

        );
    }
}

export default Login;
