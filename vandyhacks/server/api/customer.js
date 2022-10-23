import request from 'superagent';
import axios from 'axios';
import firestoreDb from './firebase.js';

// send some dummy transactions first
const apikey = '33dd18032b3a08b6de5e980a4a48bf52';
const BASEURL = 'http://api.nessieisreal.com/accounts/';
//api.nessieisreal.com/enterprise

//get
async function getTransaction(id_borrow) {
	var endpoint = BASEURL + '${id_borrow}/transfers';
	const response = await axios.get(endpoint);
	return response.data;
};

//post
function createTransaction(id_borrow, id_lender, content) {
	console.log('Posting...')
    var endpoint = BASEURL + '${id_borrow}' + '/loans?key=${apikey}'
    // serialize content into body
    var body = {
	"type": "home",
	"status": "pending",
	"credit_score": "687",
	"monthly_payment": "25",
	"amount": "100",
	"description": "dummy test"
	};
    // talk to capital one server
    var response = '';
    axios.post(endpoint, body)
	      .then( (res)=> {
		// get response from Capital One
		console.log(res.status);
		response = objectCreated;
	      })
	      .catch( (err)=> {
		console.log(err);
	      });
    
};

export {createTransaction, getTransaction};