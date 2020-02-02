import React from 'react';
import Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import Login from "../Component/Login";
import Dropdown from "react-bootstrap/Dropdown";
function Header(props) {

    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><Button variant="success">Home</Button></Navbar.Brand>
                <Nav className="mr-auto">



                    <Nav.Link href="#/"><Dropdown><Dropdown.Toggle variant="info" id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/cb">Car & Bikes</Dropdown.Item>
                            <Dropdown.Item href="/furniture">Furniture</Dropdown.Item>
                            <Dropdown.Item href="/BooksnSports">Books & Sports</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Nav.Link>
                    <Nav.Link href="/add"><Button variant={"success"}>+ New Ad</Button></Nav.Link>
                     

                    {/*<a href="/login/home"><div>open me</div></a>*/}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>


    );
}

export default Header;
