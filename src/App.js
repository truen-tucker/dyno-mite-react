import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import LocationsDirectoryPage from './pages/LocationsDirectoryPage';
import LocationDetailPage from './pages/LocationDetailPage';
import ContactPage from './pages/ContactPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer';
// import './components/Components.css'

function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
            <Route path= '/' element={<HomePage />} />
            <Route path='contact' element = {<ContactPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route
                path='locations-directory'
                element={<LocationsDirectoryPage />}
            />
            <Route path='locations-directory/:locationId' element={<LocationDetailPage />} />
        </Routes>
        <Footer />
    </div>
);
}

export default App;