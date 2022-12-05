export function FetchData(inputData,getData) {
    const headers = { 'Content-Type': 'application/json' }
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${inputData}&cnt=8&units=metric&appid=${'916d7663d1950d16ba3c224d631047c1'}`)
        .then(response => response.json())
        .then(async(data)=>{
            let a=await data;
            getData(a?.list,a?.city.name,select(a.list[0].weather[0].id));
            console.log(a?.list,a?.city.name,select(a.list[0].weather[0].id));
        });


}
function select(code){
    console.log(code);
    if(code<=599)return "rainTheem";
    else if(code<=799)return "snowTheem";
    else if(code<=805) return"sunTheem";
    else return "";
}