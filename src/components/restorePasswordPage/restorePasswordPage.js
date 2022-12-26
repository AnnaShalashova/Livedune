
import './restorePasswordPage.css';
import { useForm } from 'react-hook-form';
import logo from "../img/LiveDune.svg";
import lock_svg from "../img/lock.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import letter_svg from "../img/letter.svg";

function RestorePasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [letterWasSent, setLetterWasSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    reValidateMode: "onSubmit"
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLetterWasSent(true);
    }, 1500);
  };

  if (letterWasSent) {
    return (
      <div className="wrapper email-sent-wrapper">
        <header className="header">
          <img className="logo" src={logo} alt="Logo company" width="120" height="40"></img>
        </header>
        <main className="main">
          <div className="content">
            <img className="letter-svg" src={letter_svg} alt="Letter"></img>
            <h2>Письмо отправлено</h2>
            <p className="text-grey">На указанный вами e-mail было отправлено письмо для смены пароля</p>
            <Link to="/" className="blue-button">Вернуться на главную</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="wrapper respassword-wrapper">
      <header className="header">
        <img className="logo" src={logo} alt="Logo company" width="120" height="40"></img>
      </header>
      <main className="main">
        <div className="content">
          <img className="lock-svg" src={lock_svg} alt="Lock"></img>
          <h2>Восстановить пароль</h2>
          <p className="text-grey">Введите e-mail, на который регистрировались ранее</p>
          
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input className={errors?.email ? "error-input form-input" : "form-input"} 
              placeholder='Email' {...register("email",{ 
                required: "Введите email",
                validate: value => value === "example@example.com" || "Неверно указана почта"
                })}>
            </input>
            <div className="error-message">
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>
            {isLoading ? <button type="submit" className="blue-button"><span className="loader"></span>Отправка</button> 
            :  <button type="submit" className="blue-button btn-submit"></button>}
            <Link to="/" className="finaly-text grey-link" href='#'>Отменить</Link>
          </form>
          
        </div>
      </main>
    </div>
  );
}

export default RestorePasswordPage;
