import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./img/banner.jpg";

const FormContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Titulo = styled.h3`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: #d96130;
`;
const ImagemBanner = styled.img`
  height: 250px;
  width: 70%;
  margin-left: 200px;
  margin-top: 15px;
`;

const ButtonCreate = styled.button`
  margin-left: 20px;
  border-radius: 20px;
  background-color: #d96130;
  width: 100px;
  height: 25px;
  color: white;
  border-style: none;
  cursor: pointer;
`;
export default class CreatePlayListPage extends React.Component {
  state = {
    inputName: "",
  };

  onChangeInputName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  createPlayList = () => {
    const body = {
      name: this.state.inputName,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        { headers: { Authorization: "paula-lopes-cruz" } }
      )
      .then((res) => {
        alert("Sua playlist foi criada com sucesso!");
        this.setState({ inputName: "" });
      })
      .catch((err) => {
        alert(
          "Desculpe pelo transtorno. Não conseguimos criar sua playlist. :( Tente novamente."
        );
      });
  };
  render() {
    return (
      <div>
        <Header
          titulo="Ver Playlists"
          changePage={this.props.changeToPlayListPage}
        />
        <ImagemBanner src={Banner} alt="Banner Mulher dançando" />
        <Titulo>Que tal Criar uma Playlist?</Titulo>

        <FormContainer>
          <label>
            <input
              onChange={this.onChangeInputName}
              value={this.state.inputName}
              placeholder="nome da playlist"
            />
          </label>
          <ButtonCreate onClick={this.createPlayList}>Criar!</ButtonCreate>
        </FormContainer>
        <Footer />
      </div>
    );
  }
}
