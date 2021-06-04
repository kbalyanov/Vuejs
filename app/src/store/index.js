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
          price: "700 $",
          count:1
      },
      {
          id: 2,
          title: "iPhone X",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
              "ea fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=5",
          price: "750 $",
          count: 1
      },
      {
          id: 3,
          title: "iPhone 11",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
              "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=2",
          price: "800 $",
          count: 1
      },
      {
          id: 4,
          title: "iPhone 11 Pro",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
              " nulla optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=9",
          price: "900 $",
          count: 1
      },
      {
          id: 5,
          title: "iPhone 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
              "fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=10",
          price: "1000 $",
          count: 1
      },
      {
          id: 6,
          title: "iPhone 12Pro",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
              " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=11",
          price: "1200 $",
          count: 1
      }
  ]
  },
  getters: {// получить отфильтрованные данные из state
    finishedBooks(state) { // первым эл state вторым обьект с геттерами
      return state.usersBook.filter(phone => phone.finished);
    },
    finishedBooksCount(state, getters) {
      return getters.finishedBooks.length;
    },
    phoneById: state => (id) => {
      return state.usersBook.filter(phone => phone.id === id)[0];
    },
    goodByCategory: state => (category) => {
      return state.usersBook.filter(phone => phone.category == category);
    },
    allPhones(state) {
      return state.usersBook;
    },
    phonesInCart(state) {
      return state.cart;
    }
  },
  mutations: { // содержат методы позволяющие изменять состояние хранилища
    phonesToCart:(state,phone) => {
      state.usersBook = phone;
    },
    addToCart: (state,phone) => {
      let product = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.id === phone.id) {
            product = true;
            item.count++
          }
        })
        if (!product) {
          state.cart.push(phone)
        }
      } else {
        state.cart.push(phone)
      }
    }
  },
  // actions: {
  // },
  // modules: {
  // }
})
