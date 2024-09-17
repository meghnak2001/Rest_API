const mariDbPool = require("../config/db")
exports.getAllController=async(req,res)=>{
    try {
        const data=await mariDbPool.query("SELECT * FROM rest");
        if(!data){
            res.status(404).send({
                status:false,
                msg:"No Record",
            })
        }
        res.status(200).send({
            status:true,
            msg:"All User Record",
            data
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            msg:"Error Server in Get All User",
            error
        })
    }
}


exports.getSingleController=async(req,res)=>{
    try {
        const singleId=req.params.id;
        if(!singleId){
            res.status(404).send({
                status:false,
                msg:"Invalid ID",
            })
        }

        const data=await mariDbPool.query("SELECT * FROM rest WHERE id=?",[singleId])
        if(!data){
            res.status(404).send({
                status:false,
                msg:"No Record",
            })
        }
        res.status(200).send({
            status:true,
            msg:"User Record",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            msg:"Error Server in Get Single User",
            error
        })
    }
}


exports.insertController=async(req,res)=>{
    try {
        const {firstname,lastname,address,age}=req.body;
        if(!firstname || !lastname || !age || !address){
            res.status(400).send({
                status:false,
                msg:"All Field Required",
            })
        }
        const data=await mariDbPool.query("INSERT INTO rest(firstname,lastname,address,age) VALUES (?,?,?,?)",[firstname,lastname,address,age])
        if(!data){
            res.status(404).send({
                status:false,
                msg:"Error in Insert",
            })
        }
        res.status(200).send({
            status:true,
            msg:"Record Insert",
        })
        await mariDbPool.query("I")
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            msg:"Error Server in Create Single User",
            error
        })
    }
}


exports.deleteController=async(req,res)=>{
    try {
        const userId=req.params.id;
        if(!userId){
            res.status(404).send({
                status:false,
                msg:"Invalid ID",
            })
        }
        const data=await mariDbPool.query("DELETE FROM rest WHERE id=?",[userId])
        if(!data){
            res.status(404).send({
                status:false,
                msg:"Invalid ID Provide By User",
            })
        }
        res.status(200).send({
            status:true,
            msg:"ID Record Delete",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            msg:"Error Server in Delete Single User",
            error
        })
    }
}


exports.updateController=async(req,res)=>{
    try {
        const udateUserId=req.params.id;
        const {firstname,lastname,age,address}=req.body;
        if(!udateUserId){
            res.status(400).send({
                status:false,
                msg:"Error in Invalid Single User Id",
            })
        }
        if(!firstname || !lastname || !age || !address){
            res.status(400).send({
                status:false,
                msg:"All Field Required",
            })
        }
        const data=await mariDbPool.query("UPDATE rest SET firstname=? , lastname=? , address=?, age=? WHERE id=?",[firstname,lastname,address,age,udateUserId])
        res.status(200).send({
            status:true,
            msg:"ID Record Update",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            msg:"Error Server in Update Single User",
            error
        })
    }
}