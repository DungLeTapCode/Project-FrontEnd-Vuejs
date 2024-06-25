export default{
        getProductById: (state) => (id) => {
          return state.watches.find(product => product.id === id);
        },
       listTaskSearch: (state) => {
        const { strSearch } = state;
        var newItem = state.filteredProducts.filter( item => {
          return item.name.toLowerCase().includes(strSearch.toLowerCase());
        })
        return newItem
       },
       isLogin: (state) => {
          if(state.currentUser.email !== '' && state.currentUser.uid !=='')
            {
              return true;
            }
          else return false;
       },
       getEmail : (state) => {
          return state.currentUser.email
       }
}