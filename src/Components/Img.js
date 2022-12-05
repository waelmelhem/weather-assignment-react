import storm from './weather-icons/storm.svg';
import clear from './weather-icons/clear.svg';
import cloudy from './weather-icons/cloudy.svg';
import drizzle from './weather-icons/drizzle.svg';
import fog from './weather-icons/fog.svg';
import mostlycloudyorm from './weather-icons/mostlycloudy.svg';
import partlycloudy from './weather-icons/partlycloudy.svg';
import rain from './weather-icons/rain.svg';
import snow from './weather-icons/snow.svg';
import unknown from './weather-icons/unknown.svg';
function Img(props){

    return(
            <img src={select(props.code)} alt="storm icon" />
    )
}
function select(code){
    console.log(code);
    if(code<300){
        return storm;
    }else if(code<=499)return drizzle;
    else if(code<=599)return rain;
    else if(code<=699)return snow;
    else if(code<=799)return fog;
    else if(code==800)return clear;
    else if(code==801)return partlycloudy;
    else if(code<=805)return mostlycloudyorm;
    else return unknown;
}
export default Img;