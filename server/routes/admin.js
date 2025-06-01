const router = require('express').Router()
const adminController = require('../controllers/admin.controller')

router.get('/all-menus', adminController.getAllMenus)
router.post('/create-menu', adminController.createMenu)
router.put('/update-menu/:id', adminController.updateMenu)
router.delete('/delete-menu/:id', adminController.deleteMenu)

module.exports = router
