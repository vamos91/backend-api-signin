const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient()

exports.verifyUserExist = async (req, res, next) => {
    const user = await prisma.users.findUnique({
        where: {
            email: req.body.email
        }
    })
    console.log('verifyUserExist', user)
    if (user) {
        req.userData = user
        next()
    }else{
        res.status(403).json({ message: 'No user found' })
    }
}

exports.verifyPassword = (req, res, next) => {
    console.log('userData', req.userData)

    if (bcrypt.compareSync(req.body.password, req.userData.password)){
        next()
    }else{
        console.log('password not ok !')
        res.status(403).json({message: 'Bad email or password'})
    }      
}

exports.verifyPasswordLength = (req, res, next) => {
    if(req.body.password.length >= 8){
        next()
    }else{
        res.status(403).json({message: 'Password too short'})
    }
}

exports.verifyUserNotExist = async (req, res, next) => {
    const user = await prisma.users.findUnique({
        where: {
            email: req.body.email
        }
    })
    console.log('verifyUserNotExist', user)
    if (user) {
        res.status(403).json({ message: 'User already exists' })
    } else {
        next()
    }
}

exports.verifyCredentialsExist = (req, res, next) => {
    console.log('verifyCredentialsExist', req.body)
    if(req.body.email !== undefined && req.body.password !== undefined){
        next()
    }else{
        res.status(403).json({message: 'Email or password not exist'})
    }
}



exports.getCurrentUser = (req, res, next) => {
    console.log('getcurrent user', req.headers.authorization)
    var token;
    if(req.headers.cookie){
        token = req.headers.cookie.split("=")
    }else if(req.headers.authorization){
        token = req.headers.authorization.split(" ")
    }else{
        res.status(401).json({ message: 'Unauthorized !' })
    }

    try {
        const decodedToken = jwt.verify(token[1], 'disney')
        console.log('decodedToken:', decodedToken)
        req.userData = decodedToken
        next()
    } catch (error) {
        console.log(error)
        res.status(403).json({message: error})
    }

    // if(req.headers.cookie){
    //     const token = req.headers.cookie.split("=")
    //     try {
    //         const decodedToken = jwt.verify(token[1], 'disney')
    //         console.log('decodedToken:', decodedToken)
    //         req.userData = decodedToken
    //         next()
    //     } catch (error) {
    //         console.log(error)
    //         res.status(403).json({message: 'Forbidden !'})
    //     }
    // }else{
    //     res.status(401).json({ message: 'Unauthorized !' })
    // } 
}