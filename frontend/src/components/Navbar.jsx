import { Link } from 'react-router-dom';
export default function Navbar(){
return (
<nav className="nav">
<Link to="/">Hide Message</Link>
<Link to="/extract">Extract Message</Link>
</nav>
)
}