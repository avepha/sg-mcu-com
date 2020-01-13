import sequelize from '../datasource/sequalize'
import * as savedProvider from './saved/provider'

sequelize.sync({
  force: false
}).then(async () => {
  await savedProvider.prepareData()
})
