import firebase from 'firebase'

export const sigup =(user) =>{

    return async (dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
           
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("errr",error);
          // ..
        });
      
    }
    
}