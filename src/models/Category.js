const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      use_in_menu: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'categorias',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      foreignKey: 'category_id',
      as: 'products',
      through: 'product_categories',
    });
  }
}

module.exports = Category;
