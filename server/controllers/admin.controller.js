const menuModel = require('../models/menu.model')

class AdminController {
	constructor() {
		this.createMenu = this.createMenu.bind(this)
		this.updateMenu = this.updateMenu.bind(this)
		this.getAllMenus = this.getAllMenus.bind(this)
		this.deleteMenu = this.deleteMenu.bind(this)
	}
	// [GET] /admin/menus
	async getAllMenus(req, res, next) {
		try {
			const menus = await menuModel.find({})
			if (!menus || menus.length === 0) {
				return res.json({ message: 'No menus found' })
			}
			return res.json({ menus })
		} catch (error) {
			next(error)
		}
	}

	// [POST] /admin/create-menu
	async createMenu(req, res, next) {
		try {
			const data = req.body
			const newMenu = await menuModel.create(data)
			if (!newMenu) {
				return res.json({ message: 'Failed to create menu' })
			}

			return res
				.status(201)
				.json({ message: 'Menu created successfully', menu: newMenu })
		} catch (error) {
			next(error)
		}
	}

	// [PUT] /admin/update-menu/:id
	async updateMenu(req, res, next) {
		try {
			const data = req.body
			const { id } = req.params

			const updatedMenu = await menuModel.findByIdAndUpdate(id, data)
			if (!updatedMenu) {
				return res.json({ message: 'Menu not found or failed to update' })
			}
			return res.json({ message: 'Menu updated successfully' })
		} catch (error) {
			next(error)
		}
	}

	// [DELETE] /admin/delete-menu/:id
	async deleteMenu(req, res, next) {
		try {
			const { id } = req.params

			const deleteMenu = await menuModel.findByIdAndDelete(id)
			if (!deleteMenu) {
				return res.json({ message: 'Failed to delete menu' })
			}
			return res.json({ message: 'Menu deleted successfully' })
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new AdminController()
