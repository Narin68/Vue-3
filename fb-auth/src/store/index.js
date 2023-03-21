import { createStore } from 'vuex'
import { auth } from '../firebase'

import router from '@/router'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  updatePassword,
  sendPasswordResetEmail,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider
} from "firebase/auth"
export default createStore({
  state: {
    user: null,
    count: 0,
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
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
            break;
        }
        return;
      }
      // commit("SET_USER", auth.currentUser);
      this.state.user = auth.currentUser;
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

      // commit("SET_USER", auth.currentUser);
      this.state.user = auth.currentUser;
      router.push("/");

      //
    },

    async logout({ commit }) {
      await signOut(auth);
      // commit("CLEAR_USER");
      this.state.user = null;
      router.push("/login");
    },

    async changePassword({ commit }, details) {
      const { newPass, confirmPass } = details;
      console.log(newPass, confirmPass);
      try {
        console.log(auth.currentUser);
        await updatePassword(auth.currentUser, newPass);
        alert("Success update password !");
      } catch (e) {
        alert(e.message);
        return;
      }

      this.state.user = auth.currentUser;
      router.back(-1);
    },
    async sendEmailResetPassword({ commit }, details) {
      const { email } = details;
      console.log(email);
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (e) {
        alert(e.message);
        return;
      }
      router.back(-1);
    },

    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          this.state.user = user;
          router.push("/");
        }).catch((error) => {
          alert(error.message);
          return;
        });
      this.state.user = auth.currentUser;
    },
    async signInWithFacebook() {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          this.state.user = user;
          router.push("/");
          return;
        })
        .catch((error) => {
          alert(error.message);
          return;
        });
    },
    async signInWithGithub() {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          const credential = GithubAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          this.state.user = user;
          router.push("/");
          return;
        })
        .catch((error) => {
          alert(error.message);
          return;
        });
    }

  },
})
