import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage.jsx';
import Progress from './pages/Progress.jsx';

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;