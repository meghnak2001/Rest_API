const express=require('express')
const { getAllController, getSingleController, insertController, deleteController, updateController } = require('../controller/user.controller')
const router=express.Router()

router.get('/',getAllController)

router.get('/single/:id',getSingleController)

router.post('/add',insertController)

router.delete('/delete/:id',deleteController)

router.put('/update/:id',updateController)
module.exports=router