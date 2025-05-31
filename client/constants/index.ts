import { BookText, HomeIcon, ListCollapse, MenuIcon } from 'lucide-react'

export const navLinks = [
	{ name: 'Home', route: '#home', icon: HomeIcon },
	{ name: 'Menu', route: '#menu', icon: MenuIcon },
	{ name: 'About', route: '#about', icon: ListCollapse },
	{ name: 'Book Table', route: '#booking', icon: BookText },
]

export const filterFoods = [
	{ label: 'All', name: 'all' },
	{ label: 'Burger', name: 'burger' },
	{ label: 'Pizza', name: 'pizza' },
	{ label: 'Pasta', name: 'pasta' },
	{ label: 'Fries', name: 'fries' },
]

export const menuItems = [
	{
		id: 1,
		title: 'Delicious Pizza',
		description:
			'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
		price: '$20',
		image: '/menu/pizza.jpg',
	},
	{
		id: 2,
		title: 'Delicious Burger',
		description:
			'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
		price: '$15',
		image: '/menu/burger.jpg',
	},
	{
		id: 3,
		title: 'Delicious Fries',
		description:
			'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
		price: '$17',
		image: '/menu/fri.jpg',
	},
	{
		id: 4,
		title: 'Delicious Pizza',
		description:
			'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
		price: '$20',
		image: '/menu/pizza.jpg',
	},
	{
		id: 5,
		title: 'Delicious Burger',
		description:
			'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
		price: '$15',
		image: '/menu/burger.jpg',
	},
	{
		id: 6,
		title: 'Delicious Fries',
		description:
			'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
		price: '$17',
		image: '/menu/fri.jpg',
	},
]

export const testimonials = [
	{
		name: 'Mike Hamell',
		position: 'magna aliqua',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
		image: '/images/img1.jpg',
	},
	{
		name: 'Moana Michell',
		position: 'magna aliqua',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
		image: '/images/img2.jpg',
	},
]
