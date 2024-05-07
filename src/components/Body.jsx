import img from '../assets/Game console iphone wallpaper.png';
import '../style/Body.css'
import Button from './Button';


const Body = () =>{
    return(

      

        <div className='bodyHP'>

            

            

            <img className="homePageImg" src={img} alt="React Image"/>

            <p className='text1'> <span className='appNameTxt'>Game4Fun</span> is a website wiki for game that is believed to be the best game wiki website this year. 
                We have provided a lot of information about the game, ranging from online games, survival game, etc. 
                </p>

            <Button name=" See All Games"/>


        </div>
        
    );
}
export default Body;