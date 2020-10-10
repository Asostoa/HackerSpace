const router = require('express').Router();
const users = require('../db/notes.js')

router.get("/api/users", (req, res)=>{
    note.getNotes().then((users)=>{
        res.json(users)
    }).catch((error)=>{
        res.status(500).json(error)
    })
});
router.post("/api/users", (req, res)=>{
    user.addUser(req.body).then((note)=>{
        res.json(user);
    }).catch((error)=>{
        res.status(500).json(error);
    })
});

module.exports = router;