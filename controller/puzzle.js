let PUZZLE = require("../model/puzzle")

exports.puzzleCreate = async function(req, res, next) {
      try {
        let puzzleCreate = await PUZZLE.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "Puzzle Create Successfull",
            data : puzzleCreate
        })
      } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
      }
}

exports.puzzleFindAllData = async function(req, res, next) {
    try {
        let puzzleFindAllData = await PUZZLE.find().populate("userID")

      res.status(200).json({
          status : "Success",
          message : "All Puzzle Data Found Successfull",
          data : puzzleFindAllData
      })
    } catch (error) {
      res.status(404).json({
          status : "Fail",
          message : error.message
      })
    }
}

exports.puzzleIdFind = async function(req, res, next) {
  try {
      let puzzleIdFind = await PUZZLE.findById(req.params.id).populate("userID")
    res.status(200).json({
        status : "Success",
        message : "Puzzle ID Found Successfull",
        data : puzzleIdFind
    })
  } catch (error) {
    res.status(404).json({
        status : "Fail",
        message : error.message
    })
  }
}

exports.puzzleIdUpdate = async function(req, res, next) {
  try {
      let puzzleIdUpdate = await PUZZLE.findByIdAndUpdate(req.params.id,req.body,{new : true})
    res.status(200).json({
        status : "Success",
        message : "Puzzle ID Update Successfull",
        data : puzzleIdUpdate
    })
  } catch (error) {
    res.status(404).json({
        status : "Fail",
        message : error.message
    })
  }
}

exports.puzzleIdDelete = async function(req, res, next) {
  try {
      await PUZZLE.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status : "Success",
        message : "Puzzle ID Delete Successfull"
    })
  } catch (error) {
    res.status(404).json({
        status : "Fail",
        message : error.message
    })
  }
}