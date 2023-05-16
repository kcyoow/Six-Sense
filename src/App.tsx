import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import ItemDetailPage from './pages/ItemDetailPage';
import Header from './components/Header';
function App() {
  return (
    <div className='min-w-[800px]'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
