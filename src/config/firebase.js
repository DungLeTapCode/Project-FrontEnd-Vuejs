import firebase from "firebase/compat/app";
import 'firebase/compat/database'; 
import FirebaseConfig from "./FirebaseConfig";
import "firebase/compat/auth";




// Khởi tạo Firebase
firebase.initializeApp(FirebaseConfig);

// Lấy đối tượng database
const database = firebase.database();

// Đặt dữ liệu vào Realtime Database
export const auth = firebase.auth();

// Export database để sử dụng trong các module khác
export default database;
