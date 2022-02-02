import HomePage from 'components/HomePage';
import Game from 'components/Game';
import Library from 'components/Library';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
