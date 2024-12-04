import { Router } from 'express'
import { requireUser } from '../../backend/middleware/requireUser.middleware.js'
import { upload } from '../../backend/middleware/multer.middleware.js'
// import 

const router = Router()

router.post('/add', upload.single('img'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.send("File uploaded");
})

export {
    router as carouselRouter
}