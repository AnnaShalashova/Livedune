import './homePage.css';
import Header from '../../components/header';

function HomePage() {

  return (
    <div className="wrapper">
      <Header btnText="Выйти" loggedIn={true}/>  
      <main className="main">
        <div className='loggedIn'><h1>Добро пожаловать👋</h1></div>
      </main>
    </div>
  )
}

export default HomePage;
