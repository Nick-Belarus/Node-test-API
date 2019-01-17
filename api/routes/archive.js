const express = (require('express'));
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'This route will take archives with description and expiration date',
    });
});


router.get('/:archiveId', (req, res, next) => {
    const id = req.params.archiveId;
    const lines = req.params.textLines;
    res.status(200).json({
        message: 'This route will return ' + lines + ' of archived text from archive ' + id,
    });
});

module.exports = router;