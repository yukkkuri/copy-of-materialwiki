const router = require("express").Router();
const Image = require("../controller/ImageController");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage: storage });

// get all images
router.route("/").get(async (req, res) => {
    const data = await Image.list();
    await Image.handleRequest(data,res);
});

// get individual image
router.route('/:id').get(async (req, res) => {
    console.log(req.query);
    if('id' in req.query){
        const data = await Image.detail(req.query.id);
        await Image.handleRequest(data,res);
    } else {
        await Image.handleException('query中未提供Id',res);
    }
});

// add new image and metadata
router.post('/add', upload.single('file'), async (req, res, next) => {
    console.log(req.params);
    const data = await Image.create(req.params);
    await Image.handleRequest(data,res);
});

router.route("/update/:id").post(async (req, res) => {
    console.log(req.params);
    const data = await Image.update(req.params);
    await Image.handleRequest(data, res);
});

router.route('/:id').delete(async (req, res) => {
    const data = await Image.delete(req.query.id);
    await Image.handleRequest(data,res);
});

module.exports = router;