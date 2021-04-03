import React from "react";
import Counter from "./Counter";

import MuiAlert from '@material-ui/lab/Alert';

import '../Main.css';
export default class EarlyAccessForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      count: 0
    };
  }

  componentDidMount() {
    let username = '';
    let password = '69212e3c35d9cedbdc1afaec5c89b78c4a5f5689';
    let url = `https://formspree.io/api/0/forms/mgepgqnb/submissions`
    let authString = `${username}:${password}`
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(authString))
    fetch(url,{method: 'GET', headers: headers})
      .then(response => response.json())
      .then(data => this.setState({count: data.submissions.length}));
  }

  render() {
    const { status } = this.state;
    
    return (
    <>
      <form id="form" action="https://formspree.io/f/mgepgqnb" method="POST" onSubmit={this.submitForm}>
                <div className="user-box">
                  <input type="text" name="lastName" placeholder="Last Name" required="true" />
                </div>
                <div className="user-box">
                  <input type="text" name="firstName" placeholder="First Name" required="true" />
                </div>
                <div className="user-box">
                  <input type="phone" name="phoneNumber" placeholder="Phone Number" required="true" />
                </div>
                <div className="user-box">
                  <input type="email" name="email" placeholder="Email" required="true" />
                </div>
                {status === "SUCCESS" ? <MuiAlert style={{width: '60%', margin: 'auto'}} variant="filled" severity="success">
                                          Thank you for signing up!
                                        </MuiAlert> 
                
                                      : <button id="Submit" 
                                          name="Submit" 
                                          className="flex justify-center gradient-button text-white font-bold py-3 px-12 rounded mx-auto"
                                          >
                                          Early Access</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                {/* <a className='' href="#">
                
                  Submit
                </a> */}
                  {/* <button type="submit">Send</button> */}
              </form>
              <div>
                <p className="policy mt-4 mb-8 ml-10">By tapping Create Account or Sign In, you agree to our <u>Terms</u>. 
                  Learn how we process your data in <u>Privacy Policy</u> and <u>Cookies Policy</u>.</p>
                <Counter 
                  count={this.state.count}
                />
              </div>
          </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        this.props.incrementCount();
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}