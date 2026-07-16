import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="flex items-center justify-center min-h-screen bg-slate-900 text-white text-2xl">Loading Tic Tac Toe…</div>} />
      </Routes>
    </BrowserRouter>
  );
}
