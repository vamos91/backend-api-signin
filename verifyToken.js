const db = require('./database/connection')
const jwt = require('jsonwebtoken')

exports.verifyUserExist = (req, res, next) => {
    const sql = 'SELECT * FROM user where email=?'
    db.query(sql, [req.body.email], (err, results, fields) => {
        if(!err){
            if(results.length > 0){
                req.userData = results[0]
                next()
            }else{
                res.status(403).json({ message: 'No user found' })
            }
        }else{
           res.status(500).json({message: 'Error from server'})
        }
    })
}

exports.verifyPasswordLength = (req, res, next) => {
    if(req.body.password.length >= 8){
        next()
    }else{
        res.status(403).json({message: 'Password too short'})
    }
}

exports.verifyUserNotExist = (req, res, next) => {
    const sql = 'SELECT * FROM user where email=?'
    db.query(sql, [req.body.email], (err, results, fields) => {
        if (!err) {
            if (results.length > 0) {
                res.status(403).json({ message: 'User already exists' })
            } else {
                next() 
            }
        } else {
            res.status(500).json({ message: 'Error from server' })
        }
    })
}

exports.verifyCredentialsExist = (req, res, next) => {
    console.log(req.body)
    if(req.body.email !== undefined && req.body.password !== undefined){
        next()
    }else{
        res.status(403).json({message: 'Email or password not exist'})
    }
}

exports.verifyPassword = (req, res, next) => {
    const sql = 'SELECT * FROM user where email=?'
    db.query(sql, [req.body.email], (err, results, fields) => {
        if (!err) {
            console.log('one user found', results[0].password)
            if (req.body.password === results[0].password){
                next()
            }else{
                console.log('password not ok !')
                res.status(403).json({message: 'Bad email or password'})
            }
        } else {
            res.status(500).json({ message: 'Error from server' + err })
        }
    })
}

exports.getCurrentUser = (req, res, next) => {
    if(req.headers.cookie){
        const token = req.headers.cookie.split("=")
        try {
            const decodedToken = jwt.verify(token[1], 'disney')
            console.log('decodedToken:', decodedToken)
            next()
        } catch (error) {
            console.log(error)
            res.status(403).json({message: 'Forbidden !'})
        }
    }else{
        res.status(401).json({ message: 'Unauthorized !' })
    }
    
}