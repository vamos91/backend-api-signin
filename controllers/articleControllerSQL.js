const { faker } = require('@faker-js/faker');
//const db = require('../database/connection')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

exports.index = async (req, res) => {
    const articles = await prisma.article.findMany()
    console.log(articles)
    res.status(200).json({ message: articles })
}

// exports.index = (req, res) => {
//     db.query('SELECT * FROM article', (err, results, fields) => {
//         if (!err && results.length !== 0) {
//             res.status(200).json({ message: results })
//         } else {
//             res.status(500).json({ message: err })
//         }
//     })
// }

exports.readOne = async (req, res) => {
    const article = await prisma.article.findUnique({
        where: { id: req.params.id }
    })
    console.log(article)
    res.status(200).json({ message: article })
}

// exports.readOne = (req, res) => {
//     db.query('SELECT * FROM article where id = ?', [req.params.id], (err, results, fields) => {
//         if (!err && results.length !== 0) {
//             res.status(200).json({ message: results })
//         } else {
//             res.status(500).json({ message: err })
//         }
//     })
// }

exports.create = async (req, res) => {
    const article = await prisma.article.create({
        data: {
            title: req.body.title,
            description: req.body.description
        }
    })
}

// exports.create = (req, res) => {
//     db.query('INSERT INTO article (title, description) value (?, ?)', [req.body.title, req.body.description], (err, results, fields) => {
//         if(!err && results.length !== 0){
//             res.status(200).json({message: results})
//         }else{
//             res.status(500).json({message: err})
//         }
//     } )
// }

exports.update = async (req, res) => {
    const article = await prisma.article.update({
        where: {
            id: 1
        },
        data: {
            title: req.body.title,
            description: req.body.description
        }
    })
    console.log(article)
    res.status(200).json({ message: article })
}

exports.destroy = async (req, res) => {
    const article = await prisma.article.delete({
        where: {
            id: req.params.id
        }
    })
    console.log(article)
    res.json({ message: article })
}

exports.seed = (req, res) => {
    console.log('salut')
    //console.log(faker.lorem.words)
}