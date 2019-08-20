const router = require("express").Router();
let ImageModel = require("../models/image.model");

router.route("/").get((req, res) => {
    ImageModel.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const tags = Array(req.body.tags);
    const company = req.body.company;
    const tel = req.body.tel;
    const website = req.body.website;
    const project = req.body.project;
    const location = req.body.location;
    const product = req.body.product;
    const designer = req.body.designer;
    const year = Number(req.body.year);

    const newImage = new ImageModel({name,tags,company,tel,website,project,location,product,designer,year});
    newImage.save()
    .then(()=>res.json("Image added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;