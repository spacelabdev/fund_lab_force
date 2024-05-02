import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<div className='App'>
			<nav>
				<Navbar />
			</nav>
			<main >
				<Routes>
					<Route 
						path='/'
						element={<Homepage />}
					/>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;