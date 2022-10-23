import express from 'express';

const router = express.Router()

router.get('/', (req,res) => {
	res.send('Here at enterprise')
})

export default router;