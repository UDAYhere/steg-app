import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HideMessage from './pages/HideMessage';
import ExtractMessage from './pages/ExtractMessage';
import Navbar from './components/Navbar';


export default function App() {
return (
<Router>
<Navbar />
<div className="container">
<Routes>
<Route path="/" element={<HideMessage />} />
<Route path="/extract" element={<ExtractMessage />} />
</Routes>
</div>
</Router>
);
}