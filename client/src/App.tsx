import About from './components/about'
import BookTable from './components/book-table'
import Footer from './components/footer'
import Hero from './components/hero'
import Menu from './components/menu'
import Navbar from './components/navbar'
import Testimonial from './components/testimonal'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Menu />
			<About />
			<BookTable />
			<Testimonial />
			<Footer />
		</>
	)
}

export default App
