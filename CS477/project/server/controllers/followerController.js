const User = require('../models/userModel');
const Response = require('../models/responseobj');


 // exam question
exports.saveFollower = async (req, res, next) => {
    const findusr = await User.findById({_id: req.body.userId});
    
    if(findusr.followers.indexOf(req.body.followerId) === -1 && req.body.userId !== req.body.followerId ){
        const updatefollowers = await User.findByIdAndUpdate({_id: req.body.userId},{$push:{followers:req.body.followerId}});
        res.status(201).json(new Response(false,null, updatefollowers));
    }else{
        res.status(400).json(new Response(true,'you follow this user', null));
    }
   

};
 exports.getFollowed = async(req, res, next) =>{
        const follwr = await User.findById(req.params.id).populate('followers');
        res.status(200).json( new Response(false, null, follwr));
    };


exports.delFollow = async(req, res, next) =>{
       
        const findusr = await User.updateOne({_id:req.body.userId},{$pull:{followers:req.body.followId}});
        res.status(200).json( new Response(false, null, findusr));
    };