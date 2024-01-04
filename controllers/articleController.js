const { faker } = require('@faker-js/faker');
const db = require('../database/connection')
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

exports.readOne =  async(req, res) => {
   const article = await prisma.article.findUnique({
       where: { id: req.params.id }
   })
   console.log(article)
   res.status(200).json({ message: article })
}

exports.create = async (req, res) => {
  const article = await prisma.article.create({
    data:{
        title: req.body.title,
        description: req.body.description
    }
  })
}

exports.update = async (req, res) => {
    const article = await prisma.article.update({
        where:{
            id: 1
        },
        data: {
            title: req.body.title,
            description: req.body.description
        }
    })
    console.log(article)
    res.status(200).json({message: article})
}

exports.destroy = async (req, res) => {
   const article = await prisma.article.delete({
    where:{
        id: req.params.id
    }
   })
   console.log(article)
   res.json({message: article})
}
