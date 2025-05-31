import { testimonials } from '../../constants'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

const Testimonial = () => {
	return (
		<section className='max-w-5xl mx-auto py-12 px-4 text-center'>
			<h2 className='text-4xl font-semibold mb-10 font-[Nunito]'>
				What Says Our Customers
			</h2>
			<Carousel>
				<CarouselContent>
					{testimonials.map((item, index) => (
						<CarouselItem
							key={index}
							className='flex flex-col items-center gap-4'
						>
							<div className='bg-accent-foreground text-white p-6 rounded-md max-w-xl'>
								<p className='mb-4'>{item.text}</p>
								<p className='font-semibold text-lg'>{item.name}</p>
								<p className='text-sm'>{item.position}</p>
							</div>
							<div className='relative w-24 h-24 rounded-full ring-4 ring-primary'>
								<img
									src={item.image}
									alt={item.name}
									className='rounded-full object-cover w-full h-full'
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex justify-center gap-4 mt-6'>
					<CarouselPrevious className='bg-primary text-white w-10 h-10 rounded-full' />
					<CarouselNext className='bg-primary text-white w-10 h-10 rounded-full' />
				</div>
			</Carousel>
		</section>
	)
}

export default Testimonial
