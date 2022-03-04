
import './App.css';
import AppProvider from "./AppProvider";
import{ Routes,Route }from'react-router-dom';

import UserPage from "./User/";
import AdminPage from "./Admin/";
function App() {
  return (
  <AppProvider>
    <section id="app">
      <Routes>
        <Route path="/*" element={<UserPage />}/>
        <Route path="/admin/*" element={<AdminPage />}/>
      </Routes>
    </section>
  </AppProvider>
  );
}

export default App;
