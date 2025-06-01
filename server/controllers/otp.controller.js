const mailService = require('../services/mail.service')

class OtpController {
	async sendOtp(req, res, next) {
		try {
			const { email } = req.body
			await mailService.sendOtpMail(email)
			res.json({ succes: 'OTP sent successfully' })
		} catch (error) {
			next(error)
		}
	}

	async verifyOtp(req, res, next) {
		try {
			const { email, otp } = req.body
			const isValid = await mailService.verifyOtp(email, otp)
			res.json(isValid)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new OtpController()
