const express = (require('express'));
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'This route will return a list of all archives, or the first 10 archives AND the amount of pages',
    });
});

router.get('/:pageNumber', (req, res, next) => {
    const pageNum = req.params.pageNumber;
    res.status(200).json({
        message: 'This route will return a list of 10 archives at requested pageNumber ' + pageNum,
        
    });
});

module.exports = router;