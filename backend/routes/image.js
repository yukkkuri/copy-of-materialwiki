const router = require("express").Router();
let ImageModel = require("../models/image.model");
const uuid = require("uuid");

// get all images
router.route("/").get((req, res) => {
    ImageModel.find() // returns a promise 
        .then(images => res.json(images))
        .catch(err => res.status(400).json("Error: " + err));
});

// get individual image
router.route('/:id').get((req, res) => {
    ImageModel.findById(req.params.id) // returns a promise 
        .then(image => res.json(image))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    // const id=uuid.v4();
    const name = req.body.name;
    const tags = Array(req.body.tags);
    // const tags = req.body.tags;    
    const company = req.body.company;
    const tel = req.body.tel;
    const website = req.body.website;
    const project = req.body.project;
    const location = req.body.location;
    const product = req.body.product;
    const designer = req.body.designer;
     const year = Number(req.body.year);
    // const year = req.body.year;

//    const newImage = new ImageModel({ name, tags, company, tel, website, project, location, product, designer, year });
   
    const newImage = new ImageModel({name,company,tel,website,project,location,product,designer,year,tags});
    newImage.save()
        .then(() => res.json("Image added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    ImageModel.findById(req.params.id) // returns a promise 
        .then(image => {
            image.imageName =  req.body.imageName;
            // image.tags = image.tags ? image.tags : Array(req.body.tags);
            image.tags = req.body.tags;

            image.companyName = req.body.companyName;
            image.tel =  req.body.tel;
            image.website =  req.body.website;
            image.project = req.body.project;
            image.location =  req.body.location;
            image.product =  req.body.product;
            image.designer = req.body.designer;
            // image.year = image.year ? image.year : Number(req.body.year);
            image.year =  req.body.year;
            
            image.save()
                .then(() => res.json("Image updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));

});

// get individual image
router.route('/:id').delete((req, res) => {
    ImageModel.findByIdAndDelete(req.params.id) // returns a promise 
        .then(() => res.json("image deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});





module.exports = router;