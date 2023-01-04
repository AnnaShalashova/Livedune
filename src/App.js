import AuthorizationPager from "./pages/authorizationPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import ConfirmationPage from "./pages/confirmationPage";
import NoLetterPage from "./pages/noLetterPage";
import RestorePasswordPage from "./pages/restorePasswordPage";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<AuthorizationPager />} />
          <Route exact path="/registration" element={<RegistrationPage />} />
          <Route exact path="/confirmation" element={<ConfirmationPage />} />
          <Route exact path="/no_letter_page" element={<NoLetterPage />} />
          <Route exact path="/restore_password_page" element={<RestorePasswordPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path='*' element={<h1>Страница не найдена</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
