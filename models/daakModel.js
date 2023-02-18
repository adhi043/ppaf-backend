module.exports=(sequelize,DataTypes)=>{
    const Daak=sequelize.define('daak',{
        uid:{
            type: DataTypes.STRING,
            allowNull: false,
        },       
        file:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        subject:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        category:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        outward:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        created:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Daak

}