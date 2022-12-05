import storm  from './weather-icons/clear.svg';
import Img from "./Img"
function Main(props){
    let data=props.data;
    console.log(data);
    return(
        <div className="MainTemp">
            <Img code={data.weather[0].id}/>
            {/* <Logo/> */}
            <div className="status">
            {data.weather[0].description}
            </div>
            <div className="temp">
                <span className='head'>Temperature</span> {data.main.temp_min}℃ to {data.main.temp_max}℃
            </div>
            <div className="descrption">
            <span className='head'>Humidity</span> {data.main.humidity}% <span className='head'>Pressure</span> {data.main.pressure}
            </div>
        </div>
    )
}
export default Main;