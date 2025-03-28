const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
    registerUser,
    loginUser,
    getUserInfo,
    dontknow,
} = require("../controllers/authController");

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', protect, getUserInfo);
// router.post('/dontknow', dontknow);

// router.post("/upload-image", upload.single("image"), (req, res) => {
//     if(!req.file) {
//         return res.status(400).json({ message: "File not found" });
//     }
//     const imageUrl = `${req.protocol}://${req.get("host")}/uplaods/${req.file.filename}`;
//     res.status(201).json({ imageUrl });
// })


module.exports = router;