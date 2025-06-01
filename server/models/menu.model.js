const { Schema, model } = require('mongoose')

const menuSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		category: { type: String, required: true }, // e.g., 'Appetizer', 'Main Course', 'Dessert', 'Beverage'
		imageUrl: { type: String, required: false }, // Optional image URL for the menu item
	},
	{ timestamps: true }
)

module.exports = model('Menu', menuSchema)
