import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
// import Home from './pages/home'
const Home = () => {
  const navigate = useNavigate();
  const enterWorld = () => {
    navigate('/world');
  }
  return (
    <div className="App">
      <div className='App-container'>
        <header className="App-header">
          <div style={{fontSize:'80px'}}>Meta World</div>
          {/* <div>麦塔之家员工云社区</div> */}
        </header>
        <section className="App-button" onClick={enterWorld}>ENTER</section>
      </div>
    </div>
  );
}

export default Home;
