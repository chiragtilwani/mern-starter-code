const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const { username, email, password } = req.body

    try{
        //encoding password
        const salt=await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password,salt)
        //create new user
        const newUser = new User({username,email,password:hashedPassword})
        await newUser.save()
        //returning response
        res.status(200).json(newUser)
    }catch(err){
        console.log(err)
    }
}

exports.register = register