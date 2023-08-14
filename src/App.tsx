import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <div>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h2>Vite + React</h2>
            <div className="card">
                <button
                    type="button"
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
