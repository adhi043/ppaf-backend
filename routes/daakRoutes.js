const daakController=require('../controllers/daakController')
const { upload } = require('../upload/UploadFile')
const router=require('express').Router()

router.get('/get',daakController.getDaak)
router.post('/create',upload.single('file'),daakController.addDaak)


router.get('/get/:id',daakController.getDaakById)
router.put('/update/:id',upload.single('file'),daakController.updateDaak)
router.delete('/delete/:id',daakController.deleteDaak)


module.exports=router

