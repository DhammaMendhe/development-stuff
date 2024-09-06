const express = require('express')
const Router = require('')
const router = express.Router()
router.get('/', (req, res) => {
    res.send('this is homepage')
})


router.get('/', (req, res) => {
    res.send('this is homepage')
})

router.get('/admin', (req, res) => {
    res.send('this is homepage')
})

router.get('/adminhome', (req, res) => {
    res.send('this is homepage')
})

router.get('/adminhouse', (req, res) => {
    res.send('this is homepage')
})


module.exports = router;