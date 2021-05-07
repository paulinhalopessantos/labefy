import React from "react"
import styled from "styled-components"
import Logo from "./img/Labefy.png"

const HeaderContainer = styled.div`
background-color:rgb(143,81,188);
padding: 20px 0;
border-bottom:1px solid rgb(200,200,200);
display:flex;
justify-content:space-between;
align-items:center;

`
const ButtonChange = styled.button`
margin-right: 20px;
border-radius:20px;
background-color:#d96130;
width: 150px;
height: 40px;
color:white;
border-style:none;
cursor:pointer;


`
const Logotipo = styled.img`
height:80px;
width:80px;
margin-left: 20px;

`

export default class Header extends React.Component{
    render(){
        return(
            <HeaderContainer>
                <Logotipo src={Logo} alt="logo labefy"/>
                <ButtonChange onClick={this.props.changePage}>{this.props.titulo}</ButtonChange>
            </HeaderContainer>
        )
    }

}
