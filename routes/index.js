const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const dataController = require('../controllers/dataController');
const storyController = require('../controllers/storyController');


router.get('/', homeController.home);

router.get('/story', storyController.add);
router.post('/story', dataController.saveDataToCsv);

router.get('/story/:id', storyController.update);
router.post('/story/:id', dataController.updateDataInCsv);

// router.get('/story/:id', (req,res)=>{
//     console.log(req.params['id']);
//     res.json({
//         'id': req.params
//         // 'story': req.body.story
//     });
// })

module.exports = router;