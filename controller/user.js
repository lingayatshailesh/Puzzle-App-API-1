let bcrypt = require("bcrypt")
let USER = require("../model/user")
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
    try {
        let token = req.headers.authorization
        if(!token) throw new Error("Please Enter a Token")
        let verify = jwt.verify(token,"SURAT")
        let userVerify = await USER.findById(verify.id)
        if(!userVerify) throw new Error("User not Found")
      next()
    } catch (error) {
      res.status(404).json({
          status : "Fail",
          message : error.message
      })
    }
}

exports.userSignup = async function(req, res, next) {
      try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let userSignup = await USER.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "User Signup Successfull",
            data : userSignup
        })
      } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
      }
}

exports.userLogin = async function(req, res, next) {
    try {
      let userLogin = await USER.findOne({email : req.body.email})
      if(!userLogin) throw new Error("User not Found")
        passwordCompare = await bcrypt.compare(req.body.password,userLogin.password)
      if(!passwordCompare) throw new Error("Invalid Password")

        var token = jwt.sign({ id: userLogin._id }, 'SURAT');

      res.status(200).json({
          status : "Success",
          message : "User Login Successfull",
          data : userLogin,token
      })
    } catch (error) {
      res.status(404).json({
          status : "Fail",
          message : error.message
      })
    }
}

exports.userFindAllData = async function(req, res, next) {
    try {
        let userFindAllData = await USER.find()

      res.status(200).json({
          status : "Success",
          message : "All User Data Found Successfull",
          data : userFindAllData
      })
    } catch (error) {
      res.status(404).json({
          status : "Fail",
          message : error.message
      })
    }
}

exports.userIdFind = async function(req, res, next) {
  try {
      let userIdFind = await USER.findById(req.params.id)
    res.status(200).json({
        status : "Success",
        message : "User ID Found Successfull",
        data : userIdFind
    })
  } catch (error) {
    res.status(404).json({
        status : "Fail",
        message : error.message
    })
  }
}

exports.userIdUpdate = async function(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password,10)
      let userIdUpdate = await USER.findByIdAndUpdate(req.params.id,req.body,{new : true})
    res.status(200).json({
        status : "Success",
        message : "User ID Update Successfull",
        data : userIdUpdate
    })
  } catch (error) {
    res.status(404).json({
        status : "Fail",
        message : error.message
    })
  }
}

exports.userIdDelete = async function(req, res, next) {
  try {
      await USER.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status : "Success",
        message : "User ID Delete Successfull"
    })
  } catch (error) {
    res.status(404).json({
        status : "Fail",
        message : error.message
    })
  }
}