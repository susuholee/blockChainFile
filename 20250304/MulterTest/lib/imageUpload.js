const multer = require('multer');
const path = require('path');

exports.upoladimage = multer({ storage : multer.diskStorage(
    {
        destination : (req, file ,cb) => {
            cb(null, "Uploads");
        },
        
        filename : (req, file , cb) => {
            
            const ext = path.extname(file.originalname);

            const basename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;

            cb(null, basename, + ext);
        }
    }),

    limits : {fileSize : 5 * 1024 * 1024}
})