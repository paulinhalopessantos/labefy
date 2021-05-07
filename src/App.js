import React from "react"
import PlayListPage from "./components/PlayListPage"
import CreatePlayListPage from "./components/CreatePlayListPage"




export default class App extends React.Component {
  state = {
    page:'createPlaylistPage'
  }

  changeToCreatePlaylistPage = () =>{
    if(this.state.page === 'playlistPage'){
      this.setState({page:'createPlaylistPage'});
    }
  }

  changeToPlayListPage = () =>{
    if(this.state.page === 'createPlaylistPage'){
      this.setState({page:'playlistPage'});
    }
  }
  renderRightPage = () =>{
    if (this.state.page === 'createPlaylistPage' ){
       return <CreatePlayListPage
        changeToPlayListPage={this.changeToPlayListPage}/>
    }
      else if (this.state.page === 'playlistPage'){
      return <PlayListPage
      changeToCreatePlaylistPage={this.changeToCreatePlaylistPage} />
      }else{
        return<div></div>
      }
        
      }
  
  render(){ 


    
    return (
    <div>
      {this.renderRightPage()}
  
      
    </div>
  );
}
}


