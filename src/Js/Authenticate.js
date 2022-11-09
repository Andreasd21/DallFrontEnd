import axios from "axios"

export const Login = async(email, pass) => {
    await axios.post('https://localhost:44340/api/Users/Login/',
    {
        Email:email,
        Password:pass
    }).catch(function (error) {
      console.log(error);
      return false
  }).then(function (response) {
        console.log(response)
        localStorage.setItem('userDall',response.data.userName)
        return true
    })

}

export const CreateAccount = async(name, email, pass) => {
    await axios.post('https://localhost:44340/api/Users',
    {
        "id": 0,
        "name": name,
        "pendingRequest": false,
        "email": email,
        "password": pass
    }).then(function (response) {
        console.log(response);
        return true
    })
    .catch(function (error) {
    console.log(error);
    return false
    });
}

export const Logout = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user !== null){
      localStorage.removeItem('user');
      return true;
    }
    else{
      return false;
    }
  }

  export const CheckUser = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user !== null){
      return true
    }
    else{
      return false
    }
  }