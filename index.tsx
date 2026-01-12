import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">앱 로딩 중 오류가 발생했습니다. 콘솔을 확인해 주세요.</div>`;
  }
};

// Ensure loading starts after DOM is ready if needed, 
// though Babel module execution usually handles this.
init();