const express = require('express')
const router = express.Router()
const fs = require('fs')
const uniqid = require('uniqid')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const fse = require('fs-extra')
var cloudinary = require( 'cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
});

router.post('/upload', upload.single('avatar'),async (req, res) => {
    console.log('route upload', req.file)

    var imagePath = './tmp/'+uniqid()+'.jpg';
    console.log(imagePath)
    fse.move(`./uploads/${req.file.filename}`, imagePath, err => {
        if (err){
            console.error(err)
            res. json({result: false, message: resultCopy} );
        } else{
             // Upload an image
             const uploadResult = cloudinary.uploader
             .upload(imagePath)
             .catch((error) => {
                 console.log(error);
             });
            res. json({result: true, message: uploadResult} );
        }
        console.log('success!')
      })
    
    //fs.unlinkSync(imagePath);
})

module.exports = router