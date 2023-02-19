const db = require('../models');
const crypto = require("crypto");



// create main model
const Daak = db.daak;

// main work




// 1.create product
const addDaak = async (req, res) => {

    try {
        
        let info = {
            file: 'https://daak.sargodhacci-org.com/'+req.file.filename,
            category: req.body.category,
            subject: req.body.subject,
            outward: req.body.outward,
            uid: crypto.randomBytes(16).toString("hex"),
            created: req.body.created,
            
        }
        const daak = await Daak.create(info)
        res.status(200).json({
            status: 'ok',
            data: daak,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getDaak = async (req, res) => {

    try {
        let daak = await Daak.findAll({})
        res.status(200).json({
            status: 'ok',
            data: daak
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getDaakById = async (req, res) => {


    try {
        let id = req.params.id

        let daak = await Daak.findOne({
            where: { uid: id }
        })
        res.status(200).json({
            status: 'ok',
            data: daak
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateDaak = async (req, res) => {

    try {
        let id = req.params.id

        const file='https://daak.sargodhacci-org.com/'+req.file.filename

        const daak = await Daak.update({ ...req.body,file },{
            where: { uid: id }
        })
        res.status(200).json({
            status: 'ok',
            data: daak
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteDaak = async (req, res) => {

    try {
        let id = req.params.id

        const daak = await Daak.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: daak
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}








module.exports = {
    addDaak,
    getDaak,
    getDaakById,
    updateDaak,
    deleteDaak,
}

