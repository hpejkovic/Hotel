import hotel from '../images/hotel.jpg';
import 'animate.css/animate.min.css';

const Home = () => {
  return (
    <div className="home">
      <img className="home1" data-aos="fade-right" src={hotel} alt="hotel" />
      <h3 className="home2" data-aos="fade-left">
        Hotel Grande is the best 3 star hotel in the world
      </h3>
    </div>
  );
};

export default Home;
