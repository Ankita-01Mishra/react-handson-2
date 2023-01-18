import React, { Component } from "react";
import './App.css'

export class App extends Component {
  //State can only be changed using setState
  state = {
    Name1: "",
    Department: "",
    Rating: "",
    employee: [],
  };

  changeHandler = (e) => {
    console.log(e);
    console.log(e.target.name + " : " + e.target.value);
    // console.log('changrhndler called');
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitHandler = (e) => {
    e.preventDefault();

    console.log(e.target);

    console.log("SubmitHabdler called");
    const empObj = {
      Name: this.state.Name1,
      Department: this.state.Department,
      Rating: this.state.Rating,
    };
    const arr = this.state.employee;
    arr.push(empObj);
    console.log(arr);
    this.setState({ employee: arr });
  };

  render() {
    return (
      <>
      <center>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <label htmlFor="name" style={{marginLeft:"62px"}}>Name :</label>
          <input
            type="text"
            name="Name1"
            id="name"
            value={this.state.Name1}
            onChange={this.changeHandler}
          />{" "}
          <br /> <br />
          <label htmlFor="department">Department :</label>
          <input
            type="text"
            name="Department"
            id="department"
            value={this.state.Department}
            onChange={this.changeHandler}
          />{" "}
          <br /> <br />
          <label htmlFor="rating" style={{marginLeft:"55px"}}>Rating :</label>
          <input
            type="number"
            name="Rating"
            id="rating"
            value={this.state.Rating}
            onChange={this.changeHandler}
          />
          <br /> <br />
          <button id="btn" type="button" onClick={this.submitHandler}>
            Submit
          </button>
          {/* html button is of type SUBMIT */}
        </form>
        </center>

        <div id="result">
          {this.state.employee.map((value,index,Array)=>
          {
            return(
              <div id="output">
            <p key={index}>Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</p> 
            </div>
            )
          })
        }
        </div>
      </>
    );
  }
}

export default App;
