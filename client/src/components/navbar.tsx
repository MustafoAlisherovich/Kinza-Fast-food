import facebook from '@/assets/icons/facebook.png'
import insta from '@/assets/icons/instagram.png'
import mobile from '@/assets/icons/mobile.png'
import tg from '@/assets/icons/telegram.png'
import { useEffect, useState } from 'react'
import { navLinks } from '../../constants'
import { Button } from './ui/button'

const Navbar = () => {
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setSticky(true)
			} else {
				setSticky(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`'bg-transperent p-4 fixed w-full z-10 h-16' ${
				sticky ? 'bg-accent-foreground' : ''
			}`}
		>
			<div className='container mx-auto flex justify-between items-center'>
				<a
					href='#home'
					className='text-white text-[35px] font-semibold font-[Nunito]'
				>
					Kinza
				</a>
				<ul className='flex space-x-4 gap-4'>
					{navLinks.map(nav => (
						<li
							key={nav.route}
							className='text-white text-lg hover:text-primary transition duration-300 font-[Nunito] font-semibold'
						>
							<a href={nav.route}>{nav.name}</a>
						</li>
					))}
				</ul>
				<div className='flex items-center space-x-2 gap-2'>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='tel:+998911554995' aria-label='+998911554995'>
							<span>
								<img src={mobile} alt='Mobile' className='size-6' />
							</span>
						</a>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='https://instagram.com'>
							<img src={insta} alt='Instagram' className='size-6' />
						</a>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='https://telegram.org'>
							<img src={tg} alt='Telegram' className='size-6' />
						</a>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='https://facebook.com'>
							<img src={facebook} alt='Facebook' className='size-6' />
						</a>
					</Button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
