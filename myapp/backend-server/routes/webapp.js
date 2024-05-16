const router = require('express').Router();
const Authentication = require("../db/models/authSchema");

router.get('/users', async (req, res) => {
    // console.log("get all users");
    const users = await Authentication.find();
    // console.log(users);
    try {
        res.status(200).json(users);
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: e.message });
    }
});

router.delete('/delete/:id', async (req, res)=> {
    console.log("delete user");
    const userId = req.params.id;
    console.log(userId);
    const userData = await Authentication.findByIdAndDelete(userId);
    try {
        res.status(200).json({ message: "User deleted successfully"})
    }catch (e) {
        res.status(404).json({ message: e.message });
    }
});


router.get('/user/:userId', (req, res)=> {
    console.log("get user");
    const userId = req.params;
    console.log(userId);
    console.log(req.body);
})

router.put('/edit/:id', (req, res)=> {
    console.log("edit user");
    console.log(req.params);
    console.log(req.body);
})




module.exports = router;