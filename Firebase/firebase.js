// firebaseをimportしています
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	// 先程Firebaseにアプリを追加するところでコピーしたコードを追加
    apiKey: "AIzaSyBI6tHmskEtScdFeyBS48ZZK-10PJ_kmeA",
    authDomain: "kendo-score-book.firebaseapp.com",
    projectId: "kendo-score-book",
    storageBucket: "kendo-score-book.appspot.com",
    messagingSenderId: "911155703956",
    appId: "1:911155703956:web:092dea7e265c544e0a8481",
    measurementId: "G-3DPD10YCW2"
};
// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp

// firebase公式の指定にあったコード
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBI6tHmskEtScdFeyBS48ZZK-10PJ_kmeA",
//   authDomain: "kendo-score-book.firebaseapp.com",
//   projectId: "kendo-score-book",
//   storageBucket: "kendo-score-book.appspot.com",
//   messagingSenderId: "911155703956",
//   appId: "1:911155703956:web:092dea7e265c544e0a8481",
//   measurementId: "G-3DPD10YCW2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);