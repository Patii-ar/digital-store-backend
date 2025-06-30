const { Model, DataTypes } = require('sequelize');

class ProductOption extends Model {
  static init(sequelize) {
    super.init({
      titulo: DataTypes.STRING,
      shape: DataTypes.STRING,
      radius: DataTypes.STRING,
      type: DataTypes.STRING,
      valores_do_produto: DataTypes.JSON,
    }, {
      sequelize,
      tableName: 'product_options',
    });
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product',
    });
  }
}

module.exports = ProductOption;
