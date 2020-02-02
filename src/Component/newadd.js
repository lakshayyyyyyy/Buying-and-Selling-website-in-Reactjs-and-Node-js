import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
import Axios from "axios";


const useStyles = makeStyles({
    card: {
        alignContent:"center",
        marginTop:"5%",
        marginStart:"10%",
        marginEnd:"10%",
        marginBottom:"5%",
        maxWidth: "100%"
    },
});

class Newadd extends Component {
    constructor(props) {
        super(props);
        this.state= {

            nameP: '',
            description: '',
            price: '',
            category:''
        }
    }

    titlehandle =(event) =>
    {
        this.setState({
            title:event.target.value
        });
    }
    namehandle =(event) =>
    {
        this.setState({
            nameP:event.target.value
        });
    }
    descriptionhandle =(event) =>
    {
        this.setState({
            description:event.target.value
        });
    }
    pphandle =(event) =>
    {
        this.setState({
            price:event.target.value
        });
    }
    cat=(event)=>{
        event.preventDefault();
        this.setState({
            category:event.target.value
        },()=>{console.log(this.state.category)})

    }

    submit=()=>{
        console.log(this.state);
    Axios.post ("http://192.168.29.61:9000/add", this.state).then(res=>{
        console.log(res.data);
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.submit}>

{/*                   <TextField id="outlined-basic" label="Add Title" variant="standard" style={{marginLeft:"2%",marginTop:"1%",marginBottom:"1%"}} onChange={this.titlehandle} />*/}
{/*                   <br/>*/}
{/*<br/>*/}
                   <TextField id="outlined-basic" label="Product Name" variant="standard" style={{marginLeft:"2%"}} onChange={this.namehandle}/>
                   <br/>
                   <br/>
                   <TextField id="outlined-basic" label="Product Description" variant="standard" style={{marginLeft:"2%"}} onChange={this.descriptionhandle}/>
                   <br/>
                   <br/>
                   <label>Category</label>
                   <br/>
                   <select value={this.state.value} onChange={this.cat} >
                       <option placeholder="choose category"></option>
                       <option value="BooknSports">Books ans Sports</option>
                       <option value="Car&bikes">Car and Bikes</option>
                       <option value="Furniture">Furniture</option>
                   </select>
                   <br/><br/>
                   <TextField id="outlined-basic" label="Product Price" variant="standard" style={{marginLeft:"2%",marginTop:"1%",marginBottom:"1%"}} onChange={this.pphandle} />
                   <br/>

                   {/*<Button variant="outline-info">Add Image</Button>*/}
                   <br/>
                   <br/>
                   <input type="submit" onSubmit={this.submitme} />
               </form>
            </div>
        );
    }
}

export default Newadd;