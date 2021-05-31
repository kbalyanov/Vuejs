import { createStore } from 'vuex'

export default createStore({
  state: { /* глобальное хранилище к которым будут обращаться компаненты */
    shared: [], // книги которыми поделился пользователь
    usersBook:  [ 
      {
          id: 1,
          title: "Lorem ipsum",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
              "optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=8",
          genre: "Жанр 1",
          finished: false
      },
      {
          id: 2,
          title: "Aliquam consequatur",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
              "ea fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=5",
          genre: "Жанр 2",
          finished: false
      },
      {
          id: 3,
          title: "Laudantium",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
              "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=2",
          genre: "Жанр 1",
          finished: false
      },
      {
          id: 4,
          title: "Necessitatibus",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
              " nulla optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=9",
          genre: "Жанр 1",
          finished: true
      },
      {
          id: 5,
          title: "Nulla optio quae quod",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
              "fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=10",
          genre: "Жанр 2",
          finished: false
      },
      {
          id: 6,
          title: "Non nulla",
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
    bookById: state => (id) => {
      return state.usersBook.filter(book => book.id === id)[0];
    }
  },
  mutations: { // содержат методы позволяющие изменять состояние хранилища
    // методы которые меняют данные внутри state
    shareBook(state, book){ // при вызове любого эл из мутации первым будет передоваться обьект state
      state.shared.push(book);
    },
    markRead(state, index){
      state.usersBook[index].finished = true;
    }
  },
  // actions: {
  // },
  // modules: {
  // }
})