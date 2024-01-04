const db = require('../database/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signin = (req, res) => {
    //create token JWT
    const token = jwt.sign({ 'iss': 'JWT course', "email": req.userData.email }, 'disney', { expiresIn: '1h' })
    res.cookie('userToken', token).status(200).json({message: 'You are connected'})
}

exports.signup = (req, res) => {
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
    db.query('INSERT INTO user (email, password) value (?, ?)', [req.body.email, encryptedPassword], (err, results, fields) => {
        if(!err){
            res.status(200).json({results})
        }else{
            res.status(500).json(err)
        }
    })
}

