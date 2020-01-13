import express from 'express'
import * as provider from './provider'

const router = express.Router()

// saved
router.get('/OK', (req, res) => {
  res.json({status: 'OK'})
})

router.post('/', async (req, res) => {
  const {data, header} = req.body
  if (!data || !header) {
    res.status(403)
    return res.json({
      message: 'Invalid argument, packet or header field is required.'
    })
  }

  const result = await provider.create({data, header}).catch()
  res.json({result})
})

router.get('/', async (req, res) => {
  const results = await provider.getAll({limit: 50})
  res.json(results)
})

router.get('/prepare', async (_, res) => {
  await provider.prepareData()
  res.json({message: 'successful'})
})

export default router
