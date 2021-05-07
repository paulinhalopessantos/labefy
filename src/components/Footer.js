import React from "react"
import styled from "styled-components"


const FooterContainer = styled.div`
background-color:rgb(143,81,188);
padding: 20px 0;
border-bottom:1px solid rgb(200,200,200);
position:absolute;
height: 20px;
width:100%;
bottom:0;

`


export default class Header extends React.Component{
    render(){
        return(
            <FooterContainer/>
        )
    }

}
