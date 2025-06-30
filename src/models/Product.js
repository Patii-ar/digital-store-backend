const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      enabled: DataTypes.BOOLEAN,
      nome: DataTypes.STRING,
      slug: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      preco: DataTypes.DECIMAL,
      preco_com_desconto: DataTypes.DECIMAL,
    }, {
      sequelize,
      tableName: 'produtos',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Category, {
      foreignKey: 'product_id',
      as: 'categories',
      through: 'product_categories',
    });

    this.hasMany(models.ProductImage, {
      foreignKey: 'product_id',
      as: 'images',
    });

    this.hasMany(models.ProductOption, {
      foreignKey: 'product_id',
      as: 'options',
    });
  }
}

module.exports = Product;
