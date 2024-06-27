const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient()

exports.index = async (req, res) => {
    const flats = await prisma.flat.findMany()
    if(flats){
        console.log(flats)
        res.status(200).json(flats)
    }else{
        res.status(500)
    }  
}

exports.indexPerUser = async (req, res) => {
    console.log('index flat controller')
    const user = await prisma.users.findUnique({
        where: {
            email: req.userData.email
        }
    })
    console.log('user', user)
    const flats = await prisma.flat.findMany({
        where:{
            authorId : user.id
        }
    })
    if(flats){
        console.log(flats)
        res.status(200).json(flats)
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
    console.log('from flats controller: ',user)
   const flat = await prisma.flat.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            lat: parseFloat(req.body.lat),
            lon: parseFloat(req.body.lon),
            authorId: user.id
        }
    })
    if(flat) {
        res.status(200).json({message: 'New flat created !'})
    }else{
       res.status(500).json({message: 'Something went wrong'}) 
    }
}

exports.read = async (req, res) => {
    const flat = await prisma.flat.findUniqueOrThrow({
        where:{
            id: req.params.id
        }
    })
   res.status(200).json(flat)
}