<template>
    
    <div>
       <vee-form :validation-schema="rules" @submit="sendData">
    <h4 class="text-warning text-center pt-5">Registration Page</h4>

    <label>
      <vee-field type="text" class="input" name="title" placeholder="ENTER EMAIL"/>
      <vee-error name="title"/>
        <div class="line-box">
          <div class="line"></div>
        </div>
    </label>

    <label>
        <vee-field type="text" class="input" name="username" placeholder="ENTER USERNAME"/>
        <vee-error name="username"/>
        <div class="line-box">
          <div class="line"></div>
        </div>
    </label>

    <label>
        <vee-field type="password" class="input" name="password" placeholder="ENTER PASSWORD"/>
        <vee-error name="password"/>
        <div class="line-box">
          <div class="line"></div>
        </div>
    </label>

    <label>
      <vee-field type="password" class="input" name="confirm" placeholder="CONFIRM PASSWORD"/>
      <vee-error name="confirm"/>
      <div class="line-box">
        <div class="line"></div>
      </div>
    </label>

    <button type="submit">submit</button>
  </vee-form>
    </div>
    <router-view/>
</template>

<script>
import {Form,Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
export default {
    name: "Finished",
    components: {
        // Form, Field, ErrorMessage
        VeeForm: Form, // границы фотрмы
        VeeField: Field,// поле формы, по умолчанию input
        VeeError: ErrorMessage // элемент html для вывода ошибок
    },
    data(){
        return{
            rules: yup.object({
                //значение атрибута name: правило
                title: yup.string().trim().required("Поле обязательно заполнить").max(20, "Максимум 20 символов"),
                pageCount: yup.number().typeError("Введите число").required("Поле обязательно заполнить")
                .positive("Введите значение больше 0").integer("Введите целое число")
            })
        }
        
    },
    methods: {
      sendData(values) {
        console.log(values);
        this.$store.commit('addToCard', {phone:values})
      }
    }

}
</script>

<style scoped>
body {
  background: #C5E1A5;
}



form {
  width: 30%;
  margin: 60px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
}


label {
  display: block;
  position: relative;
  margin: 40px 0px;
}

.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: rgb(120,120,120);
  transition: ease .3s;
}


.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 1px;
  background: #BCBCBC;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8BC34A;
  transition: ease .6s;
} 

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220,220,220);
  font-weight: bold;
  color: rgb(120,120,120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease .3s;
} 

button:hover {
  background: #8BC34A;
  color: #ffffff;
} 
</style>