var express = require('express');
var router = express.Router();
let PC = require("../controller/puzzle")
let UC = require("../controller/user")

/* GET users listing. */
router.post('/create', UC.sequre, PC.puzzleCreate );

router.get('/alldata', UC.sequre, PC.puzzleFindAllData );

router.get('/:id', UC.sequre, PC.puzzleIdFind );

router.patch('/:id', UC.sequre, PC.puzzleIdUpdate);

router.delete('/:id', UC.sequre, PC.puzzleIdDelete);

module.exports = router;
