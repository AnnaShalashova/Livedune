
import facebook_icon from "../../assets/img/fasebook.svg";
import google_icon from "../../assets/img/google.svg";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Header from '../../components/header';
import { Link, useNavigate } from 'react-router-dom';
import './AuthorizationPage.css';

function AuthorizationPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({email: "example@example.com", password: "password2021"});
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit"
  });

  const onSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      setErrorMessage(false);
      navigate("/home")
      reset()
    } else {
      setErrorMessage( "Неверный email или пароль")
    }
  };

  return (
    <div className="wrapper">
      <Header pText="У вас нет аккаунта?" btnText="Регистрация" path="/registration"/>  
      <main className="main">
        <section className="content login-content">
          <h1>Войти</h1>
          <p className="text-grey">Добро пожаловать, рады видеть вас снова 👋</p>
          <div className="social-btn-container">
            <a href="#"><img className="social-logo" src={facebook_icon} alt="facebook icon" width="24"/>Войти через Facebook</a>
            <a href="#"><img className="social-logo" src={google_icon} alt="google icon" width="24"/>Войти через Google</a>
          </div>
          <p className="text-grey or-text">или</p>

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input className={errors?.email ? "error-input form-input" : "form-input"} type="email" placeholder='Email' {...register("email",{ 
              required: "Введите email"})}>
            </input>
            <input className={errors?.password ? "error-input form-input" : "form-input"} type="password" placeholder='Пароль' {...register("password",{ 
              required: "Введите пароль",})}>
            </input>
            <div className="error-message">
              {errors?.email && <p>{errors?.email?.message}</p>}
              {errors?.password && <p>{errors?.email ? `, ${errors?.password?.message}` : errors?.password?.message}</p>}
              {errorMessage && <p>{errorMessage}</p>}
            </div>         
            <button type="submit" className="blue-button">Войти в аккаунт</button>
            <Link to="/restore_password_page" className="finaly-text blue-text">Забыли пароль?</Link>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AuthorizationPage;
