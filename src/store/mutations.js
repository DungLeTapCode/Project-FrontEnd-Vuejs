export default{
    setFilteredProducts(state, products) {
        state.filteredProducts = products;
        
      },
      HANDLE_SEARCH(state,strSearch){
        state.strSearch = strSearch
      },
    SET_CURRENT_USER(state,user){
      state.currentUser = user
    }
}