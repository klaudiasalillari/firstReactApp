import './App.css';
import React from "react";
import NavbarComponent from './components/navbar';
import PlayerListComponent from "./components/playerList";
import PlayerComponent from "./components/player";
import EmptyMessageComponent from "./components/EmptyMessage";

    function App() {

         const state = {
            playerCount:0
          };

        const addPlayer = () => {
          this.setState({playerCount: this.state.playerCount + 1});
        }

        return (
          <div className="App">
            <div>
              <NavbarComponent/></div>
            <div>
              {/* {if () {
                
              }} */}
            <div>
              <PlayerListComponent playerCount="1"></PlayerListComponent>
            </div>
              <PlayerComponent/>
          </div>
          <button type="button" onClick={addPlayer}>+ Add player</button>
          </div>
        );
      }

export default App;
