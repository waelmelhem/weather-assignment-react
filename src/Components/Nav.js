import React from "react";
import { FetchData } from './../Utils/ApiUtils';
class Nav extends React.Component{
    constructor (props){
        super(props);
        this.state={
            inputData:""
        }
    }
    async onFindClicked(e){
        e.preventDefault();
        
        let resp= await FetchData(this.state.inputData,this.props.getData);
        // console.log(resp);
    }
    onInputChanged(e){
        this.setState({
            inputData:e.target.value,
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFindClicked.bind(this)}>
                    <input value={this.state.inputData} onChange={this.onInputChanged.bind(this)}/>
                    <button>FIND WEATHER</button>
                </form>
            </div>
        )
    }
}
export default Nav;