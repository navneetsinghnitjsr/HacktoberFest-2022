import { Component } from "react";
import Card from "../card/card.component";

class cardList extends Component{
    render(){
    
        const {monster}=this.props;
        return(
         <div className="card-list">
            {monster.map((monster)=>{
                const {name,email,id}=monster;
            return (
            <Card monster={monster}/>   
                
            )})}
        </div>
        );
    }
}
export default cardList;