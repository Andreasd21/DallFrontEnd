<script setup>
    import {CreateAccount} from '../Js/Authenticate'
</script>

<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div class="col-md-12" v-if="loginError">
        <span class="small text-danger">
          {{loginError}}
        </span>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <div class="form-row">
            <label for="email">Email address</label>
            <input 
              type="email" 
              name="email" 
              class="form-control"
              v-model="email"
              @blur="checkEmail"
              @keyup="checkEmail"
            >
            <span v-if="emailError" class="small text-danger">
              {{emailError}}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <div class="form-row">
            <label for="name">User Name</label>
            <input 
              type="name" 
              name="name" 
              class="form-control"
              v-model="name"
              @blur="checkName"
              @keyup="checkName"
            >
            <span v-if="nameError" class="small text-danger">
              {{nameError}}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <div class="form-row spacing">
            <label for="password">Password</label>
            <div class="pass-wrap">
              <input 
                :type="inputType" 
                name="password"
                class="form-control"
                v-model="password"
                @blur="checkPassword"
                @keyup="checkPassword"
              >
              </div>
            </div>
            <span v-if="passwordError" class="small text-danger">
              {{passwordError}}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <button>
            Sign In
        </button>

      </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      name:'',
      nameError:'',
      loginError: '',
      inputType: 'password',
    }
  },
  methods: {
    checkEmail() {
      this.loginError = this.loginError.length > 0 ? '' : ''
      this.emailError = this.email.length == 0 ? 'Email can not be empty.' 
      : (this.validateEmail(this.email) ? '' : this.email + ' is not an email.')
    },
    validateEmail(email) {
      const re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return re.test(email);
    },
    checkPassword() {
      this.loginError = this.loginError.length > 0 ? '' : ''
      this.passwordError = this.password.length == 0 ? 'Password can not be empty.' : ''
    },
    checkName(){
        this.nameError = this.name.length == 0 ? "Name can't be empty." :''
    },
    submit() {
      this.checkEmail();
      this.checkPassword();
      this.checkName();

      if(this.passwordError == '' && this.emailError == '')
      {
        if(CreateAccount(this.name,this.email, this.password))
        {
          this.$router.push("login");
        }
        else{
          this.loginError = 'Something went wrong'
        }
      }
    }
  }
}
</script>
