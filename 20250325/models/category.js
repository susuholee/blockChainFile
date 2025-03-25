const {DataTypes, Model} = require('sequelize');

class Category extends Model {
    static init (sequelize) {
        return super.init({
            // 테이블 필드
            name : {
                type : DataTypes.STRING(10),
                allowNull : false,
                primaryKey : true
            }
        }, {
            // 테이블 속성
            sequelize,
            timestamps : false,
            modelName : "Category",
            tableName : "categorys",
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci"
        })
    }
    static associate (models) {
        models.Category.hasMany(models.Post, {foreignKey : "category_id", sourceKey : "name"});
        models.Category.belongsTo(models.User, {foreignKey : "user_id", target : "uid", onDelete : "CASCADE"});
    }
}

module.exports = Category;