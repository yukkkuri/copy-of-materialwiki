const express = require("express")
const router = express.Router();
const members = require("../../data/Members")
const uuid = require("uuid");

//set up a route
router.get("/", (req, res) => res.json(members));
router.get("/:id", (req, res) => {
    const found = members.some(m => m.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(m => m.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ "msg": `No member with the id of ${req.params.id}` })
    }

});

router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    };

    if (!newMember.email || !newMember.name) {
        return res.status(400).json({ msg: "Please include a name and email" });
    }
    /*
    * Here you inject some operations on the database
    */
    members.push(newMember);
    res.json(members);
})

router.put("/:id", (req, res) => {
    const found = members.some(m => m.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(m => {
            if (m.id === parseInt(req.params.id)) {
                m.name = updMember.name ? updMember.name : m.name;
                m.email = updMember.email ? updMember.email : m.email;
                res.json({msg: "Member updated", members});
            }
        });
    } else {
        res.status(400).json({ "msg": `No member with the id of ${req.params.id}` })
    }
})


module.exports = router;