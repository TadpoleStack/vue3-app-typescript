import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import user from "./modules/user";
const ls = new SecureLS({ isCompression: false });

export const key: InjectionKey<Store<any>> = Symbol();

export default createStore({
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      key: "vue3-app-ts-cache",
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
