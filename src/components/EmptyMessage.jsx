import React from 'react';

class EmptyMessageComponent extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {playerCount:0};
      }
     
      render() {
        return (
          <div>
              <div>
                <h1>No players in list!</h1>
                <h4>Click add player button to add players</h4></div>
          </div>
        );
      }
}
export default EmptyMessageComponent;
