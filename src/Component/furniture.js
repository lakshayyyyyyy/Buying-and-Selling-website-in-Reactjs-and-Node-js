import React, {Component} from 'react';
import Listcard from "./listcard";
import Axios from "axios";

class Cb extends Component {
    constructor() {
        super();
        this.state = {
            'items':[]

        }

    }
    componentDidMount=()=>
    {
        Axios.get("http://192.168.29.61:9000/Furniture").then(response =>{
            //  console.log(response.data);
            this.setState({items:response.data})
        }).catch();

    }
    myfuc=()=>{
        Axios.get("http://192.168.29.61:9000/Furniture").then(response =>{
            //  console.log(response.data);
            this.setState({items:response.data})
        }).catch();
    }
    render() {
        const {items}=this.state;
        this.myfuc();
        return (

            <div>

                {items.map( item =>(<Listcard category={item.category} title={item.Title} description={item.description} price={item.price} ></Listcard>))}
            </div>
        );
    }
}

export default Cb;