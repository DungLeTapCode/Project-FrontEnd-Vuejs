// Trong file actions.js
import { auth } from "../config/firebase";

export default {
  filterProducts({ commit, state }, name) {
    let filtered;
    if (name) {
      filtered = state.watches.filter(product => product.gender === name);
    } else {
      filtered = state.watches;
    }
    commit('setFilteredProducts', filtered);
  },
  sortByPrice({ commit, state }, order) {
    let sorted;
    if (order === 'ascending') {
      sorted = state.filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (order === 'descending') {
      sorted = state.filteredProducts.slice().sort((a, b) => b.price - a.price);
    } else {
      sorted = state.filteredProducts;
    }
    commit('setFilteredProducts', sorted);
  },
  handleSearch({ commit }, strSearch){
    commit('HANDLE_SEARCH',strSearch);
  },
  async register({ commit },data){
      try{
     let result = await auth.createUserWithEmailAndPassword(data.email,data.password)
          return {
            ok: true,
            error:null
          }
        }
      catch(error){
         return{
          ok:false,
          error: error.message,
         }
      }
      alert(error)  
},
  async login({ commit },data){
    try{
  let result = await auth.signInWithEmailAndPassword(data.email,data.password)
  let user = {
      email:data.email,
      uid:result.user.uid
  }
   commit('SET_CURRENT_USER',user)
        return {
          ok: true,
          error:null
        }
      }
    catch(error){
      return{
        ok:false,
        error: error.message,
      }
    }
    alert(error)  
  },
    
};
