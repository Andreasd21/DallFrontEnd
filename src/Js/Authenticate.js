import axios from "axios"

export const Login = async(email, pass) => {
  const event =  new Event('user')
  let errorstatus = false
    await axios.post('https://localhost:49153/api/Users/Login/',
    {
        Email:email,
        Password:pass
    }).catch(function (error) {
      console.log(error);
      errorstatus = true
      return
  }).then(function (response) {
    if (errorstatus == true){
      return
    }
        console.log(response)
        sessionStorage.setItem('userDall',JSON.stringify(response.data))
        window.dispatchEvent(event)
    })
    return errorstatus
}

export const CreateAccount = async(name, email, pass) => {
    await axios.post('https://localhost:49153/api/Users',
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
  const event = new Event('user')
    const user = JSON.parse(sessionStorage.getItem('userDall'))
    if(user != null){
      sessionStorage.removeItem('userDall');
      window.dispatchEvent(event)
      return true;
    }
    else{
      return false;
    }
  }

  export const CheckUser = () =>{
    const user = JSON.parse(sessionStorage.getItem('userDall'));
    if(user !== null){
      return true
    }
    else{
      return false
    }
  }