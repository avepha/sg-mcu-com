import SavedModel from './model'

export const create = ({data, header}) => {
  return SavedModel.create({
    createdTime: new Date(),
    updatedTime: new Date(),
    data,
    header,
  })
}

export const getAll = ({limit = 10}) => {
  return SavedModel.findAll({limit})
}

export const prepareData = async () => {
  const results = await getAll({limit: 10})

  if (results.length === 0) {
    const presets = require('./data').default
    for (let i = 0; i < presets.length; i++) {
      const {header, data} = presets[i]
      await create({data, header})
    }
  }

  return Promise.resolve(true)
}

export const deleteById = async (id) => {
  return SavedModel.destroy({
    where: {id}
  })
}
