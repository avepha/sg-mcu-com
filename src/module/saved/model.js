import sequelize from '../../datasource/sequalize'
import {Model, INTEGER, JSON, STRING} from 'sequelize'

class SavedModel extends Model {}

SavedModel.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  },
  header: {
    type: STRING,
    allowNull: false,
  },
  data: {
    type: JSON,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Saves'
});

export default SavedModel
