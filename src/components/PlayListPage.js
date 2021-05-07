import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const ListContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const ButtonList = styled.button`
  margin-right: 100px;
  border-radius: 20px;
  background-color: #d96130;
  width: 100px;
  height: 25px;
  color: white;
  border-style: none;
  cursor: pointer;
`;

const Titulo = styled.h3`
  color: #d96130;
  position: absolute;
  margin-left: 550px;
`;
export default class PlayListPage extends React.Component {
  state = {
    list: [],
  };

  componentDidMount = () => {
    this.getPlaylists();
  };

  getPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "paula-lopes-cruz",
          },
        }
      );

      this.setState({ list: response.data.result.list });
      console.log(this.state.list);
    } catch (err) {
      console.log(err);
    }
  };

  getDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "paula-lopes-cruz",
          },
        }
      );
      const responseDetail = response.data.result.tracks.map((item) => {
        return item.name;
      });

      this.setState({ detail: responseDetail });
      console.log("estado:" + this.state.detail);
    } catch {
      alert("Desculpe, não conseguimos buscar sua playlist. Tente novamente.");
    }
  };

  deletePlayList = async (id) => {
    try {
      if (window.confirm("Tem certeza que deseja deletar essa playlist?")) {
        const response = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: { Authorization: "paula-lopes-cruz" },
          }
        );

        alert("Playlist excluida com sucesso!");
        this.getPlaylists();
      }
    } catch (err) {
      console.log("Não foi possível excluir essa playlist.Tente novamente.");
    }
  };

  render() {
    const listPlaylists = this.state.list.map((playlist) => {
      return (
        <p key={playlist.id}>
          {playlist.name}
          <ButtonList
            onClick={() => {
              this.deletePlayList(playlist.id);
            }}
          >
            Apagar
          </ButtonList>
          <ButtonList
            onClick={() => {
              this.getDetail(playlist.id);
            }}
          >
            Detalhar
          </ButtonList>
        </p>
      );
    });
    return (
      <div>
        <Header
          titulo="Voltar para a Home"
          changePage={this.props.changeToCreatePlaylistPage}
        />
        <Titulo>Suas playlists favoritas!</Titulo>

        <ListContainer>
          <div>{listPlaylists}</div>
        </ListContainer>
        <Footer />
      </div>
    );
  }
}
