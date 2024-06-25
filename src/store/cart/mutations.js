export default{
    setInitialTasks: (state, tasks) => {
        state.listCarts = tasks;

      },
    CHANGE_QUANTITY: (state, { index,quantity }) =>{
        state.listCarts[index].actItem.quantity += quantity
    },
    BUY_ITEM: (state, data) =>{
        state.listCarts.push(data);
    },
    DELETE_ITEM:(state , newListCarts) =>{
         state.listCarts = newListCarts
    },
    UPDATE_QUANTITY: (state, { index,quantity }) =>{
        state.listCarts[index].actItem.quantity = quantity },
   
        
}