import bg from '../assets/img.jpg'
import { Button } from './ui/button'

const Hero = () => {
	return (
		<section
			className='h-screen bg-cover bg-center flex items-center'
			style={{ backgroundImage: `url(${bg})` }}
			id='home'
		>
			<div className='max-w-4xl px-30'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6 font-[Nunito] text-white'>
					Fast Food Restaurant
				</h1>
				<p className='text-xl mb-8 max-w-xl text-white font-semibold'>
					Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
					ad mollitia laborum quam quisquam esse error unde. Tempora ex
					doloremque, labore sunt repellat dolore, iste magni quos nihil ducimus
					libero ipsam.
				</p>
				<Button
					size={'lg'}
					className='font-semibold px-8 py-3 transition text-white rounded-full'
				>
					Order Now
				</Button>
			</div>
		</section>
	)
}

export default Hero
