import sequelize from '../datasource/sequalize'
import * as savedProvider from './saved/provider'

sequelize.sync({
  force: true
}).then(async () => {
  await savedProvider.prepareData()
})
