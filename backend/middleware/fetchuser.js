import jwt from 'jsonwebtoken'

export const fetchuser=(req,res,next)=>{
    
    const jwt_secret='signedFromBrainiac';
    
    // get the user from the jwt token 
    const token=req.header('auth_token');
    if(!token){
        res.status(401).send({error: " invalid token name"})
    }

    try {
        const data=jwt.verify(token,jwt_secret)
        req.user=data.user;
        next()
    } catch (error) {
        res.status(401).send({error: error.message,"token":token})
    }
}
