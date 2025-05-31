import { useState } from 'react'
import { filterFoods, menuItems } from '../../constants'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const Menu = () => {
	const [filter, setFilter] = useState('All')

	return (
		<section className='py-12 text-center' id='menu'>
			<h2 className='text-4xl font-cursive mb-8'>Our Menu</h2>

			<div className='flex justify-center gap-4 mb-8 max-md:mt-4 max-md:w-full max-md:rounded-full max-md:p-2 max-md:bg-accent-foreground max-md:text-white'>
				{filterFoods.map(item => (
					<Button
						key={item.name}
						size={'lg'}
						className='rounded-full'
						variant={filter === item.name ? 'default' : 'ghost'}
						onClick={() => setFilter(item.name)}
					>
						{item.label}
					</Button>
				))}
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
				{menuItems.map(item => (
					<Card key={item.id} className='overflow-hidden'>
						<CardContent className='flex flex-col items-center pt-6'>
							<img
								src={item.image}
								alt={item.title}
								className='h-36 object-contain w-full'
							/>
						</CardContent>
						<CardContent className='bg-accent-foreground text-left text-white p-6 space-y-3'>
							<h3 className='text-lg font-semibold'>{item.title}</h3>
							<p className='text-sm leading-relaxed'>{item.description}</p>
							<div className='flex justify-between items-center pt-2'>
								<span className='text-base font-medium'>{item.price}</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className='mt-8 flext justify-around items-center'>
				<Button size={'lg'} className='rounded-full text-white cursor-pointer'>
					See All Menu
				</Button>
			</div>
		</section>
	)
}

export default Menu
