const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const otpModel = require('../models/otp.model')

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		})
	}

	async sendOtpMail(email) {
		const otp = Math.floor(100000 + Math.random() * 900000)
		console.log('Generated OTP:', otp)

		const hashedOtp = await bcrypt.hash(otp.toString(), 10)
		await otpModel.deleteMany({ email }) // Clear previous OTPs for this email
		await otpModel.create({
			email,
			otp: hashedOtp,
			expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
		})
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: email,
			subject: `OTP for verification ${new Date().toLocaleDateString()}`,
			html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f7;
        padding: 40px 0;
        margin: 0;
      }
      .container {
        background-color: #ffffff;
        max-width: 480px;
        margin: 0 auto;
        padding: 32px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        text-align: center;
      }
      h1 {
        font-size: 22px;
        color: #333;
        margin-bottom: 24px;
      }
      .otp-code {
        font-size: 36px;
        letter-spacing: 6px;
        color: #0a84ff;
        font-weight: bold;
        background: #f0f4ff;
        display: inline-block;
        padding: 12px 24px;
        border-radius: 8px;
      }
      p {
        font-size: 15px;
        color: #666;
        margin-top: 24px;
      }
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #aaa;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Your One-Time Password (OTP)</h1>
      <div class="otp-code">${otp}</div>
      <p>This code is valid for <strong>5 minutes</strong>. Please do not share it with anyone.</p>
      <div class="footer">
        &copy; ${new Date().getFullYear()} <a href="https://kinza.com">Kinza Fast Food</a>. All rights reserved.
      </div>
    </div>
  </body>
</html>
`,
		})
	}

	async verifyOtp(email, otp) {
		const record = await otpModel.find({ email }).sort({ createdAt: -1 })
		if (!record) return { failure: 'No OTP found for this email.' }
		const lastRecord = record[record.length - 1]
		if (!lastRecord) return { failure: 'No OTP found for this email.' }

		if (lastRecord.expiresAt < new Date())
			return { failure: 'OTP has expired.' }

		const isValidOtp = await bcrypt.compare(otp, lastRecord.otp)
		if (!isValidOtp) return { failure: 'Invalid OTP.' }

		await otpModel.deleteMany({ email })
		return { success: 'OTP verified successfully.' }
	}
}

module.exports = new MailService()
