const { Schema, model } = require('mongoose')

const bookingSchema = new Schema(
	{
		name: { type: String, required: true },
		phoneNumber: { type: String, required: true },
		email: { type: String, required: true },
		numberOfPeople: { type: Number, required: true },
		date: { type: Date, required: true },
	},
	{ timestamps: true }
)

module.exports = model('Booking', bookingSchema)
