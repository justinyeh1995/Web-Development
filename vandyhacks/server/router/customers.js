import axios from 'axios';
import express from 'express';
import {createTransaction, getTransaction} from '../api/customer.js';

const router = express.Router();

//get
router.get('/', (req,res,next) => {
	// res.send('Here at customer')
	const id_borrow = 100
	var payload = getTransaction(id_borrow)
	console.log(payload);
	res.send(payload);
	});

//register
router.post('/register',(req,res,next) => {
	var body = {
	"first_name": "AAAA",
	"last_name": "YYYYYY",
	"address": {
	"street_number": "1234",
	"street_name": "fghggg adsfadf",
	"city": "Bombville",
	"state": "CA",
	"zip": "23456"
	}}
	const URL = 'http://api.nessieisreal.com/customers?key=33dd18032b3a08b6de5e980a4a48bf52';
	const response = axios.post(URL, body);
	console.log(response);
	return response;
});

//post
router.post('/', (req,res,next) => {
	// req should have id_sender, id_reciever
	const id_lender = 'A';
	const id_borrow = 'B';
	const amount = 100;
	createTransaction(id_borrow, id_lender,amount);	
	})
export default router;

