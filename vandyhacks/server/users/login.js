import firestoreDb from "../api/firebase.js";
import Register from "./register.js";
async function Login(email, first, last) {
	const userRef = firestoreDb.collection('userInfo')
	const snapshot = await userRef.where('Email','==',email).get();
	if (snapshot.empty) {
	  console.log("First time user");
	  // Create User
	  Register(email, first, last)
	}
	// return status
};

export default Login;
	