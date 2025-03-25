const {DataTypes, Model} = require('sequelize');

class Post extends Model {
    static init(sequelize){
        return super.init({
            title : {
                type : DataTypes.STRING(20),
                allowNull : false
            },
            content : {
                type : DataTypes.STRING,
                allowNull : false
            },
            user : {
                type : DataTypes.STRING(10),
                allowNull : false
            }   
        }, {
            sequelize,
            timestamps : true,
            modelName : 'Post',
            tableName : 'posts',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }

    static associate (models) {
        models.Post.belongsTo(models.User, {foreignKey : "user_id", target : "uid", onDelete : "CASCADE"});
        models.Post.belongsTo(models.Category, {foreignKey : "category_id", target : "name", onDelete : "CASCADE"});
    }
}

module.exports = Post;