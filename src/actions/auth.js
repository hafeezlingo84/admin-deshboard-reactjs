 import firebase from 'firebase'
 import {useState} from 'react'
 import {dispatch} from 'react-redux' 

const sigup = (data) => {
    return(dispatch) => {
      console.log(data);
    }  
}

export {
  sigup 
}