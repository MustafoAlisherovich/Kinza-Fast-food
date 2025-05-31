import { Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from './ui/separator'

const Footer = () => {
	return (
		<footer className='bg-accent-foreground text-white py-10 px-4'>
			<div className='max-w-6xl mx-auto flex flex-col items-center'>
				<div className='grid md:grid-cols-3 gap-12 text-center'>
					{/* Contact Us */}
					<div>
						<h2 className='text-2xl font-semibold mb-4 font-[Nunito]'>
							Contact Us
						</h2>
						<div className='flex items-center justify-center gap-2 mb-2'>
							<MapPin size={18} /> <span>Location</span>
						</div>
						<div className='flex items-center justify-center gap-2 mb-2'>
							<Phone size={18} /> <span>+01 1234567890</span>
						</div>
						<div className='flex items-center justify-center gap-2'>
							<Mail size={18} /> <span>demo@gmail.com</span>
						</div>
					</div>

					{/* Feane / About */}
					<div>
						<h2 className='text-2xl font-semibold mb-4 font-[Nunito]'>Feane</h2>
						<p className='text-sm mb-4 max-w-xs mx-auto'>
							Necessary, making this the first true generator on the Internet.
							It uses a dictionary of over 200 Latin words, combined with
						</p>
					</div>

					{/* Opening Hours */}
					<div>
						<h2 className='text-2xl font-semibold mb-4 font-[Nunito]'>
							Opening Hours
						</h2>
						<p className='mb-2'>Everyday</p>
						<p>10.00 Am - 10.00 Pm</p>
					</div>
				</div>

				<Separator className='my-6 bg-gray-700 w-full' />

				<div className='text-center text-sm text-gray-400'>
					© {new Date().getFullYear()}. All Rights Reserved
				</div>
			</div>
		</footer>
	)
}

export default Footer
