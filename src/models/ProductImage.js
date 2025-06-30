const { Model, DataTypes } = require('sequelize');

class ProductImage extends Model {
  static init(sequelize) {
    super.init({
      path: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'product_images',
    });
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product',
    });
  }
}

module.exports = ProductImage;
