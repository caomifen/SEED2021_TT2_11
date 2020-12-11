import './App.css';
import React from 'react';
import axios from 'axios';

export default class AddTransaction extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
  
  // View user details
  // axios({
  //   method: 'post',
  //   url: "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/users",
  //   headers: {"x-api-key": "hVEEbI23nv4edfhWFkbLr11WQ9KL0mtU8paHpkJE"},
  //   data:{
  //     "custID": "11"
  //   }})
  //   .then(rsp => {
  //   console.log(rsp)
  //   })
    
    
  // View account details
    axios({
      method: 'post',
      url: "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view",
      headers: {"x-api-key": "hVEEbI23nv4edfhWFkbLr11WQ9KL0mtU8paHpkJE"},
      data:{
        "custID": "11"
      }})
      .then(rsp => {
      console.log(rsp)
      })
      
    //     // View account balance
    // axios({
    //   method: 'post',
    //   url: "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update",
    //   headers: {"x-api-key": "hVEEbI23nv4edfhWFkbLr11WQ9KL0mtU8paHpkJE"},
    //   data:{
    //     "custID": "11" ,"amount": "67"
    //   }})
    //   .then(rsp => {
    //   console.log(rsp)
    //   })
      
      
          // View transaction details
    axios({
      method: 'post',
      url: "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view",
      headers: {"x-api-key": "hVEEbI23nv4edfhWFkbLr11WQ9KL0mtU8paHpkJE"},
      data:{
        "custID": "11"
      }})
      .then(rsp => {
      console.log(rsp)
      })
 
  
  //   const headers = {
  //     'x-api-key': 'hVEEbI23nv4edfhWFkbLr11WQ9KL0mtU8paHpkJE'
  //   }
  //   const params = new URLSearchParams({
  //     contact: this.ContactPerson,
  //     phoneNumber: this.PhoneNumber,
  //     email: this.Email
  //   }).toString();
  // const baseurl = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020"
  // const data = ""
  // const loginDetails = { username: "Group11" , password: "_X7KxI9O5Na7Pe6"};
  // const transationDetails =  { custID: 11 , payeeID: 2, dateTime: "2019-01-01", amount:9, expensesCat:"food",
  // eGift: true,message:"hello"};
  // axios.post(baseurl + "/transaction/add", transationDetails,{headers} )
  // .then(response => {this.person = response.data.id;
  //     console.log('response: ', response);
  //     console.log('token: ', response.statusCode);
  //     if(response === 200){
  //         // localStorage.setItem('token', response.data.token);
  //     }
  // })
  // .catch(error => {
  //   this.errorMessage = error.message;
  //   console.error("There was an error!", error);
  // });
  }

  render() {
    return (
      <h1>
        Make a transation
      </h1>
    )
  }
}
