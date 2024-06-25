import store from "..";
import database from "../../config/firebase";


export default{
    actBuyItem({ commit, state },data){
        
        const index = state.listCarts.findIndex(function(cart)
        {
           return cart.actItem.id === data.actItem.id
        }
 );
         if(index === -1){
            commit('BUY_ITEM',data)
         }
        else{
            let quantity = data.quantity
            commit('CHANGE_QUANTITY',{ index,quantity })
        }
    },
    async actDeleteItem({ commit, state, rootState }, cart) {
        try {
          let uid = rootState.currentUser.uid;
          const actItemId = cart.actItem.id; // Lấy actItem.id từ cart
          const itemId = cart.id; // Lấy id từ cart (nếu đúng cấu trúc của dữ liệu Firebase)
    
          const taskRef = database.ref(`task/${uid}/${itemId}`);
    
          // Xóa mục từ Firebase
          await taskRef.set(null); // Hoặc taskRef.set(null) để xóa
    
          // Cập nhật lại local state sau khi xóa thành công
          const newListCarts = state.listCarts.filter(item => item.actItem.id !== actItemId || item.id !== actItemId);
          commit('DELETE_ITEM', newListCarts); // Gọi mutation để cập nhật state
    
        } catch (e) {
          console.error('Error deleting item from Firebase:', e.message);
          // Xử lý lỗi nếu cần thiết
        }
      },
    actUpdateItem({ commit, state },data){
        
        const index = state.listCarts.findIndex(function(cart)
        {
           return cart.actItem.id === data.actItem.id
        }
 );
         if(index === -1){
            commit('BUY_ITEM',data)
         }
        else{
            
            let quantity = data.quantity
            commit('UPDATE_QUANTITY',{ index,quantity })
        }
    },
    async fireBaseData({ commit, state, rootState }, data) {
        try {
          let uid = rootState.currentUser.uid;
          const taskRef = database.ref('task/' + uid);
      
          // Kiểm tra xem data.actItem.id đã tồn tại trong task của người dùng hay chưa
          const snapshot = await taskRef.orderByChild('actItem/id').equalTo(data.actItem.id).once('value');
          if (snapshot.exists()) {
            // Nếu tồn tại, update quantity của actItem đó
            snapshot.forEach(childSnapshot => {
              let existingKey = childSnapshot.key;
              let existingData = childSnapshot.val();
              taskRef.child(existingKey).update({
                quantity: existingData.quantity + data.quantity
              });
            });
          } else {
            // Nếu không tồn tại, thêm mới dữ liệu với key mới ngẫu nhiên
            const newTaskRef = taskRef.push();
            await newTaskRef.set(data);
          }
        } catch (e) {
          console.error('Error saving data to Firebase: ', e.message);
          return {
            error: e.message
          };
        }
      },
      
      async fetchInitialTasks({ commit, rootState }) {
        try {
          let uid = rootState.currentUser.uid;
          const taskRef = database.ref('task/' + uid);
          
          // Lắng nghe sự kiện value từ Firebase Realtime Database
          taskRef.on('value', snapshot => {
            const tasks = [];
            snapshot.forEach(childSnapshot => {
              tasks.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
            });
            
            commit('setInitialTasks', tasks);
          });
      
        } catch (e) {
          console.error('Error fetching initial tasks: ', e.message);
          // Xử lý lỗi nếu cần thiết
        }
      }
      
    // actUpdateQuantity
}