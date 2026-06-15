import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Volunteer from '@/pages/Volunteer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
