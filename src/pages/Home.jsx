import Body from "../components/Body";
import Header from "../components/Navbar";
import '../style/Home.css';


const Home = () =>{
    return(
        <div>
           <div className="homeNav"><Header/></div> 
            <Body/>

        </div>
    );
}
export default Home;