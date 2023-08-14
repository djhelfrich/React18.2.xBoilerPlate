import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <header>
            <h1>Not Found</h1>
            <Link to="/">Go home</Link>
        </header>
    );
}
