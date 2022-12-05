import Img from "./Img";

function List(props){
    let list=props.list;
    return(
        <div className="list">
            <ul className="flex-container">
                {list.map((e,idx)=>{
                    if(idx==0)return null;
                    else{
                        return(
                            <li>
                                <div className="time">
                                    {e.dt_txt.split(" ")[1].slice(0, 5)}
                                </div>
                                <div>
                                    <Img code={e.weather[0].id}/>
                                </div>
                                <div className="temp">
                                    {e.main.temp}℃
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
export default List;