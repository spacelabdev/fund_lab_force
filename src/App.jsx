import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Mission from './pages/Mission/Mission';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    const [activePage, setActivePage] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname
        const pages = {
            '/': 'homepage',
            '/mission': 'mission'
        }
        setActivePage(pages[path] || null)
    }, [location])

	return (
		<div className='App'>
			<nav>
				<Navbar setActivePage={setActivePage} />
			</nav>
			<main >
				<Routes>
					<Route 
						path='/mission'
						element={<Mission />}
					/>
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