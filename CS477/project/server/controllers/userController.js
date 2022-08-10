const User = require('../models/userModel');
const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
 
    res.json(await User.find({$text: {$search : req.query.search}}));
    
}

    exports.saveUser = async (req, res, next) => {
        // console.log(req.body);
        try{
           let newAccount = await new User(req.body).save();
           res.status(201).json( new Response(false, null, newAccount)); 
        }catch(error){
            res.status(500).json( new Response(true, 'The usename is already taken', error));
        }
        
    }



    

    exports.getUserInfo = async (req, res, next)=>{
        const find = await User.findOne({_id: req.params.id});
        res.status(201).json(new Response(false,null, find));
    }


    exports.deleteUser = async (req, res, next)=>{
        const del = await User.findOneAndDelete({_id:req.params.id});
        
        res.status(201).json(new Response(false, null, del));
    }