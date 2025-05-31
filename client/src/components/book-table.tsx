import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'

const BookTable = () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<section
			id='booking'
			className='flex flex-col md:flex-row justify-between gap-10 px-4 py-12'
		>
			<div className='w-full md:w-1/2 space-y-6'>
				<h2 className='text-4xl font-semibold font-[Nunito]'>Book A Table</h2>
				<form className='space-y-4'>
					<div>
						<Label htmlFor='name'>Your Name</Label>
						<Input id='name' placeholder='Your Name' />
					</div>
					<div>
						<Label htmlFor='phone'>Phone Number</Label>
						<Input id='phone' placeholder='Phone Number' />
					</div>
					<div>
						<Label htmlFor='email'>Your Email</Label>
						<Input id='email' placeholder='Your Email' type='email' />
					</div>
					<div>
						<Label htmlFor='persons'>How many persons?</Label>
						<Select>
							<SelectTrigger id='persons' className='w-full'>
								<SelectValue placeholder='How many persons?' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='1'>1 Person</SelectItem>
								<SelectItem value='2'>2 Persons</SelectItem>
								<SelectItem value='3'>3 Persons</SelectItem>
								<SelectItem value='4'>4+ Persons</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className='flex flex-col space-y-2'>
						<Label>Date</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={'outline'}
									className='w-full justify-start text-left font-normal'
								>
									<CalendarIcon className='mr-2 h-4 w-4' />
									{date ? format(date, 'dd.MM.yyyy') : <span>ДД.ММ.ГГГГ</span>}
								</Button>
							</PopoverTrigger>
							<PopoverContent className='w-auto p-0' align='start'>
								<Calendar
									mode='single'
									selected={date}
									onSelect={setDate}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
					<Button className='text-white font-semibold rounded-full' size={'lg'}>
						BOOK NOW
					</Button>
				</form>
			</div>

			<div className='w-full md:w-1/2 h-[450px] rounded-md overflow-hidden'>
				<iframe
					className='w-full h-full'
					src='https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed'
					loading='lazy'
				></iframe>
			</div>
		</section>
	)
}

export default BookTable
