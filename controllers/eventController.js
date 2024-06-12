const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient()

exports.index = async (req, res) => {
    const events = await prisma.event.findMany()
    if(events){
        console.log(events)
        res.status(200).json(events)
    }else{
        res.status(500)
    }  
}

exports.indexPerUser = async (req, res) => {
    console.log('index event controller')
    const user = await prisma.users.findUnique({
        where: {
            email: req.userData.email
        }
    })
    console.log('user', user)
    const events = await prisma.event.findMany({
        where:{
            authorId : user.id
        }
    })
    if(events){
        console.log(events)
        res.status(200).json(events)
    }else{
        res.status(500)
    }  
}

exports.create = async (req, res) => {
    console.log('create', req.body)
    const user = await prisma.users.findUnique({
        where: {
            email: req.userData.email
        }
    })
    console.log('from event controller: ',user)
   const event = await prisma.event.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            lat: parseFloat(req.body.lat),
            lon: parseFloat(req.body.lon),
            authorId: user.id
        }
    })
    if(event) {
        res.status(200).json({message: 'New flat created !'})
    }else{
       res.status(500).json({message: 'Something wen wrong'}) 
    }
}

exports.read = async (req, res) => {
    const event = await prisma.event.findUniqueOrThrow({
        where:{
            id: req.params.id
        }
    })
   res.status(200).json(event)
}