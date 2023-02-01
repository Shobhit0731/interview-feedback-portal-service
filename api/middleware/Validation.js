export const nameValidator = (req, res, next) => {
    const l= req.body.name.length
    if(l<3 || l>50) {
        res.status(400).json({"message": "name should have min 3 and maximum 50 character"})
    }
    else{
        next();
    }
}

export const emailValidator=(req,res,next)=>{
    const regex = /[0-9a-zA-Z_]@[a-zA-z]+[.]com/;
    var l =req.body.email
    if( !(l.match(regex)))
    {
        res.status(400).json(
            {
                "message": "Email should be a valid one"
            }
        )
    }
    else{
        next();
    }
}

export const passwordValidator=(req,res,next)=>{
    var l=req.body.password.length
    if( (l<5) || (l>10))
    {
        res.status(400).json(
            {
                "message": "Password should have minimum 5 and maximum 10 characters"
            }
        )
    }
    else{
        next();
    }
}