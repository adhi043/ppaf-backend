const dbConfig = require('../config/dbConfig.js')
const {Sequelize,DataTypes}=require('sequelize')


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            idle:dbConfig.pool.idle,
            acquire:dbConfig.pool.acquire,
        }
    }
)


sequelize.authenticate().then(()=>{
    console.log('Connected to database')
    console.log('Creating tables')
}).catch((err)=>{
    console.log(err)
})


const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize


db.daak=require('./daakModel.js')(sequelize,DataTypes)


db.sequelize.sync({force:false}).then(()=>{
    console.log('Yes Re-Sync Complete')
})




module.exports=db

