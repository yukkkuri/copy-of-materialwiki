const multer = require('multer');
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const config = require('../config');

aws.config.update({
    secretAccessKey: config.s3.AWS_SECRET_ACCESS,
    accessKeyId: config.s3.AWS_ACCESS_KEY_ID,
    region: config.s3.region
})

const s3 = new aws.S3(),
    storage = multerS3({
        s3: s3,
        bucket: "matters-db",
        acl: "public-read",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: "TEST-METADATA" });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        }
    }),
    upload = multer({ storage: storage });

module.exports = upload;