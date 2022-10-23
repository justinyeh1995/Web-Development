import firestoreDb from "../api/firebase.js";

async function Register(email, first, last) {
	let userRef = await firestoreDb.collection('userInfo').doc('dummy').set({
		email: email, first: first, last: last
	      });
}

export default Register;

