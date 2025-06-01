const adminModel = require('../models/admin.model')
const bcrypt = require('bcrypt')

class AuthController {
	async login(req, res, next) {
		try {
			const { email, password } = req.body

			const admin = await adminModel.findOne({ email })
			if (!admin) return res.json({ failure: 'Admin not found' })

			const isValidPassword = await bcrypt.compare(password, admin.password)
			if (!isValidPassword)
				return res.json({ failure: 'Password is incorrect' })

			return res.json({ admin })
		} catch (error) {
			next(error)
		}
	}

	async register(req, res, next) {
		try {
			const { email, password, fullName } = req.body

			const admin = await adminModel.findOne({ email })
			if (admin) return res.json({ failure: 'Admin already exists' })

			const hashedPassword = await bcrypt.hash(password, 10)
			const newAdmin = await adminModel.create({
				email,
				password: hashedPassword,
				fullName,
			})

			return res.json({ admin: newAdmin })
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new AuthController()
