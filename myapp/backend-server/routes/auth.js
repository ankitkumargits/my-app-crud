const router = require('express').Router();
const Authentication = require("../db/models/authSchema");

router.post('/signup', async (req, res)=> {
    console.log("reqData", req.body);
    const { username, password } = req.body
    const isExistUser = await Authentication.exists({ username: username});
    if(isExistUser){
        res.status(201).json({ message: "user is already exists" });
    }else {
        const authData = new Authentication({
            username: username,
            password: password
        })
        await authData.save();
        res.status(201).json({ message: "successfully created account" });
    }
});

router.post("/login", async(req, res)=> {
    console.log("login reqData", req.body);
    const { username, password } = req.body
    const fetchUser = await Authentication.findOne({ username: username});
    console.log("isLogin", fetchUser);
    if(fetchUser){
        if(fetchUser.password === password){
            res.status(200).json(fetchUser);
        }else {
            res.status(404).json({ message: "Invalid Credentials"});
        }
    }else {
        res.status(404).json({ message: "Invalid Credentials"})
    }
});



module.exports = router;