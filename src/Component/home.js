import React, {Component} from 'react';
import Axios from "axios";
import Listcard from "./listcard";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            'items':[]

        }

    }
       componentDidMount=()=>
        {
            Axios.get("http://your ip:9000/home").then(response =>{
                console.log(response.data);
                this.setState({items:response.data})
            }).catch();

        }
        myfunc=()=>
        {
            Axios.get("http://your ip:9000/home").then(response =>{
                console.log(response.data);
                this.setState({items:response.data})
            }).catch();
        }

    render() {
        const {items}=this.state;
        this.myfunc();
        return (
            <div>
                {items.map( item =>(<Listcard category={item.category} title={item.Title} description={item.description} price={item.price} ></Listcard>))}
            </div>
        );
    }
}

export default Home;
