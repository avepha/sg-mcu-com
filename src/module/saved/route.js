import express from 'express'

const router = express.Router()

// saved
router.get('/OK', (req, res) => {
  res.json({status: 'OK'})
})

router.post('/', (req, res) => {
  res.json([])
})

router.get('/', (req, res) => {
  res.json([])
})

router.delete('/', (req, res) => {
  res.json([])
})

export default router
