// import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
// import Homepage from './pages/Homepage/Homepage';
import MissionPage from './pages/MissionPage/MissionPage';
import ValuesMissionVision from './components/ValuesMissionVision/ValuesMissionVision';
import DonateButton from './components/Buttons/DonateButton';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<main className='App'>
			<Navbar />
			{/* <Homepage /> */}
			<MissionPage />
			<ValuesMissionVision />
			<DonateButton path='/donate' buttonText='Donate' />
			<Footer />
		</main>
	);
}

export default App;

// Make sections default 100vh
