const db = require('../database/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signin = (req, res) => {
    const token = jwt.sign({ 'iss': 'JWT course', "email": req.userData.email }, 'disney', { expiresIn: '1h' })
    //res.cookie('userToken', token).status(200).json({message: 'You are connected'})
    res.status(200).json({message: 'You are connected', token: token})
}

exports.signup = (req, res) => {
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
    db.query('INSERT INTO users (email, password) value (?, ?)', [req.body.email, encryptedPassword], (err, results, fields) => {
        if(!err){
            res.status(200).json({results})
        }else{
            console.log(err)
            res.status(500).json(err)
        }
    })
}

exports.getUser = (req, res) => {
    console.log(req.userData.email)
    res.status(200).json({ email: req.userData.email })
}

exports.logout = (req, res) => {
    res.clearCookie('userToken')
    res.status(200).json({message: 'cookie foo cleared'});
}
