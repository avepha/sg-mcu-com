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

router.post('/deletes', async (req, res) => {
  const {id} = req.body
  if (!id) {
    res.status(403)
    return res.json({
      message: 'Invalid argument, required id.'
    })
  }

  const results = await provider.deleteById(id)
  res.json({
    effect: results,
  })
})

router.get('/', async (req, res) => {
  const results = await provider.getAll({limit: 50})
  res.json(results)
})

export default router
