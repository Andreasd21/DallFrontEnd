import axios from "axios"

export const Login = async(email, pass) => {
  console.log(email,pass)
  const event =  new Event('user')
  let errorstatus = false
    await axios.post(import.meta.env.VITE_API_ENDPOINT+'api/Users/Login',
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
  let errorstatus = false
    await axios.post(`${import.meta.env.VITE_API_ENDPOINT}api/Users`,
    {
        "id": 0,
        "name": name,
        "pendingRequest": false,
        "email": email,
        "password": pass
    }).then(function (response) {
        console.log(response);
        errorstatus = true
    })
    .catch(function (error) {
      console.log(error);
    });
    return errorstatus
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