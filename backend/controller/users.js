import jwt from 'jsonwebtoken'
import testUser from "../model/testing.js";
import bcrypt from 'bcrypt'
import userData from "../model/users.js";

const jwt_secret='signedFromBrainiac';


export const newUserfnx=async(req,res)=>{
    try {

        let alreadyOne=await userData.findOne({email:req.body.email})
        if(alreadyOne){
            return res.status(400).json({error:"user email already exist!!"})
        }

        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password,salt)

        const newUser=await userData.create({
            username:req.body.username,
            email:req.body.email,
            password:secPass,
            imgUrl:req.body.imgUrl
        })


    } catch (error) {

        console.error(error.message);
        res.status(500).send(error.message)     
    }

}

export const userLogin=async(req,res)=>{
    const {email,password}=req.body;

    try {
        let user=await userData.findOne({email:email})
        const uname=user.username

        if(!user){
            return res.status(400).json({error:"Incorrect Credentials"})
        }

        const passwordCompare=await bcrypt.compare(password,user.password);

        if(!passwordCompare){
            return res.status(400).json({error:"Incorrect Credentials"});
        }


        const data={
            user:{
                id:user.id
            }
        }
        const auth_token=jwt.sign(data,jwt_secret);
            res.json({auth_token,uname,status:true});
       

        

        
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message)    
    }
}

export const getUserData=async (req,res)=>{
    try {
        const userId=req.user.id
        const user=await userData.findById(userId).select("-password"); 
        res.send(user)
    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Backend Error!")    

    }
}

