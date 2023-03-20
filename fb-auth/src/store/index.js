import { createStore } from 'vuex'
import { auth } from '../firebase'
import router from '@/router'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
export default createStore({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {

      state.user = user;
      console.log(state.user);


    },
    CLEAR_USER(state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;

      try {

        await signInWithEmailAndPassword(auth, email, password);

      } catch (e) {
        switch (e.message) {
          case "auth/user-not-found":
            alert("Not found user");
            break;

          case "auth/wrong-passwod":
            alert("Wrong password");
            break;

          default:
            alert(e.message);
            break

        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async register({ commit }, details) {
      const { email, password } = details;
      console.log(email);
      console.log(password);

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (e) {
        switch (e.message) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;

          case "auth/invalid-email":
            alert("Invalid email");
            break;

          default:
            alert(e.message);
            break;

        }
        return;
      }

      commit("SET_USER", auth.currentUser);
      router.push("/");

      //
    },

    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/login");
    }

  },
})
