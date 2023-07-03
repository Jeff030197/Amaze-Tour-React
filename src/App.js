import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './Components/Heading';
import Content from './Components/Content';
import Cards from './Components/Cards';
import Cards2 from './Components/cards2';
import Loading from './Components/loading';
import background from "./img/bgc.jpg";
import Footer from './Components/Footer';


function App() {

  return (
    <div style={{
      backgroundImage: `url(${background})`, backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}>


      <Heading></Heading>
      <br></br>
      <Content></Content>
      <br></br>
      <Cards></Cards>
      <br></br>
      <Cards2></Cards2>
      <br></br>
      <Loading></Loading>
      <br></br>
      <Footer></Footer>






    </div>
  );
}

export default App;
