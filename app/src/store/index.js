import { createStore } from 'vuex'

export default createStore({
  state: { /* глобальное хранилище к которым будут обращаться компаненты */
    cart: [], // книги которыми поделился пользователь
    usersBook:  [ 
      {
          id: 1,
          title: "iPhone 8",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
              "optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=8",
          genre: "Жанр 1",
          finished: false
      },
      {
          id: 2,
          title: "iPhone X",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
              "ea fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=5",
          genre: "Жанр 2",
          finished: false
      },
      {
          id: 3,
          title: "iPhone 11",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
              "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=2",
          genre: "Жанр 1",
          finished: false
      },
      {
          id: 4,
          title: "iPhone 11 Pro",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
              " nulla optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=9",
          genre: "Жанр 1",
          finished: true
      },
      {
          id: 5,
          title: "iPhone 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
              "fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=10",
          genre: "Жанр 2",
          finished: false
      },
      {
          id: 6,
          title: "iPhone 12Pro",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
              " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=11",
          genre: "Жанр 2",
          finished: true
      }
  ]
  },
  getters: {// получить отфильтрованные данные из state
    finishedBooks(state) { // первым эл state вторым обьект с геттерами
      return state.usersBook.filter(book => book.finished);
    },
    finishedBooksCount(state, getters) {
      return getters.finishedBooks.length;
    },
    phoneById: state => (id) => {
      return state.usersBook.filter(phone => phone.id === id)[0];
    },
    allPhones(state) {
      return state.usersBook;
    },
    phonesInCart(state) {
      return state.cart;
    }
  },
  mutations: { // содержат методы позволяющие изменять состояние хранилища
    // методы которые меняют данные внутри state
    addToCart(state, phone){ // при вызове любого эл из мутации первым будет передоваться обьект state
      state.cart.push(phone);
    },
    markRead(state, index){
      state.usersBook[index].finished = true;
    },
    addToUserBook(state,phones){
      for (let i =0; i < phones.length; i++) {
        state.usersBook.push(phones[i]);
      }
    }
  },
  // actions: {
  // },
  // modules: {
  // }
})
