<template>
<div class="cont">
  <div class="container-sm mt-20">
    <div class="mx-5" style="overflow-y:scroll">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :name="userName"
        :photo-url="userPhotoURL"
        :sender="userId === user?.uid"
      >
        {{ text }}
      </Message>
    </div>
  </div>
  <div ref="bottom" class="mt-20" />
  <div class="bottom">
    <div class="container-sm">
      <form v-if="isLogin" @submit.prevent="send">
        <input v-model="message" placeholder="Message" required />
        <button type="submit" >send
          <SendIcon />
        </button>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'
import SendIcon from './SendIcon.vue'
import Message from './Message.vue'
export default {
  components: { Message, SendIcon },
  setup() {
    const { user, isLogin } = useAuth()
    const { messages, sendMessage } = useChat()
    const bottom = ref(null)
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: 'smooth' })
        })
      },
      { deep: true }
    )
    const message = ref('')
    const send = () => {
      sendMessage(message.value)
      message.value = ''
    }
    return { user, isLogin, messages, bottom, message, send }
  }
}
</script>
<style scoped>
.cont {
background-color: lightblue;
width: 100%;
flex: wrap;
padding-left: 3rem;
border-style: solid;
border-radius: 5px;
border: honeydew;
margin-bottom: 10px;
}
button {
  padding: 5px;
}
input {
  padding: 15px;
  width: 50%;
}
.mx-5 {
  height: 300px;
}

@media(max-width: 700px) {
  .cont {
background-color: lightblue;
width: 100%;
flex: wrap;
padding-left: 3rem;
border-style: solid;
border-radius: 5px;
border: honeydew;
margin-bottom: 10px;
}
button {
  padding: 5px;
}
input {
  padding: 15px;
  width: 50%;
}
.mx-5 {
  height: 300px;
}
};
</style>