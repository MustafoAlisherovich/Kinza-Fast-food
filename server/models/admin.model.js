const { Schema, model } = require('mongoose')

const adminSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		fullName: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: String, default: 'admin' },
		isDeleted: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

module.exports = model('Admin', adminSchema)
