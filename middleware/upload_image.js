


const multer = require("multer");

const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images/');
    },
    filename: function (req, file, cb) {
        const fileext = path.extname(file.originalname);

        const filename = file.originalname.replace(fileext, "")
            .toLowerCase().split(" ")
            .join("-") + "-" + Date.now();
        cb(null, filename + fileext);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname == "profile") {
            if (
                file.mimetype == "image/png" ||
                file.mimetype == "image/jpg" ||
                file.mimetype == "image/jpeg"
            ) {
                cb(null, true);
            }

        }else{
            cb(new Error("There was an unknown error!!"))
        }
    }
});


module.exports={upload};