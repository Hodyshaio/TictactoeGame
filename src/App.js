import React , { Component } from 'react';
import './App.css';
import Square from './Square';
import Utils from './Utils';

class App extends Component {
    constructor(props){
          super(props);
          this.toggle = this.toggle.bind(this);
          this.state = {
            board: Array(9).fill(' '),
            currentPlayer: 'X'
          }
}

toggle(index){
      let { currentPlayer , board } = this.state;
      let result = Utils.wonVersion2(board);
      // let result = Utils.won(board);
      let gameOver = Utils.isGameOver(board);
      if(result !== false || gameOver){
          return false;
      }  
      if(board[index] == ' '){
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        this.setState({
          board,
          currentPlayer
        });
      }
}
restart = () => {
      const board = this.state.board.slice();
      for(let i = 0; i < board.length; i++){
        board[i] = ' ';
      }
      this.setState({
        board,
        currentPlayer: 'X'
      });
    } 

render(){
  const { currentPlayer , board } = this.state;
  let result = Utils.wonVersion2(board);
  // let result = Utils.won(board);
  let gameOver = Utils.isGameOver(board);
  let resultHtml = null;
  
  if(result !== false){
    resultHtml = <div className="title"> Game Over  : { result } Won the Game! </div>;
  }
  else if(gameOver === true){
    resultHtml = <div className="title"> Game Over  : No one won the Game! </div>;
  }
  else {
    resultHtml = <div className="title"> Current Player : { currentPlayer } </div>;
  }

  return (
    <div>
        {resultHtml}
        <div className="Board">
              {
                this.state.board.map((item , idx) => <Square onClick={this.toggle} 
                key={idx} value={item} index={idx} />)
              }
        </div>
        <br></br>
        <button className="Btn" onClick={this.restart}>Restart</button>
    </div>
  );
}

}

export default App;
