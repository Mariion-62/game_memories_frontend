import HomePage from 'components/HomePage';
import Library from 'components/Library';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
