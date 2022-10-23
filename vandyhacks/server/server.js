import express from 'express';
import customerRoutes from './router/customers.js'
import enterpriseRoutes from './router/enterprise.js'
const app = express();
const PORT = '3030';

app.use('/customer', customerRoutes);
app.use('/enterprise', enterpriseRoutes);
app.get('/', (req,res) => {
	res.send({
		code: 200,
		status: 'success'
	});
	//login(req).then( (status)=> {res.send(status)});

});

app.listen(PORT, () => console.log(`Listening on Port: http://localhost:${PORT}`));