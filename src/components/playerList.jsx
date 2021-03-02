import React from 'react';

class PlayerListComponent extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {playerCount:0};
      }
     
      render() {
        return (
          <div>
              {(this.state.playerCount < 1) ?
              <div>
                <h1>No players in list!</h1>
                <h4>Click add player button to add players</h4></div>
                : <h1>Total players: {this.state.playerCount}</h1>}
                
          </div>
        );
      }
}
export default PlayerListComponent;
