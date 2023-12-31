import React from 'react'
import './App.css'
import Botones from './component/Botones.jsx'

function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }
  render() {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      stepNumber: 0,
      xIsNext: false
    }
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    console.log(this.state.stepNumber)
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState(
      {
        history: history.concat(
          [{ squares: squares }]
        ),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      }
    )
  }
  jumpTo(step) {
    this.setState({
      text: "",
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }
  cambiarTexto = () => {
    let texto = document.getElementById("text").value;
    this.setState({
      text: texto
    })
  }
  componentDidMount() {
    this.setState({
      text: "entramos a : componentDidMount"
    })
  }
  render() {
    let history = this.state.history;
    let current = history[this.state.stepNumber];
    let winner = calcularWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Mover #' :
        'Iniciar el juego'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })
    let status;
    status = "Next Juagdor" + (this.state.xIsNext ? "X" : "O")
    if (winner) {
      status = "Ganaste che! " + winner;
    } else {
      status = " Siguiente jugador: " + (this.state.xIsNext ? "X" : "O")
    }
    return (
      <div className='game'>
        {/* <div className='game-board'>
      <Board
        squares={current.squares}
        onClick={i=> this.handleClick(i)}
      />
      </div>
      <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
      </div> */}
        <div className='game-info'>{this.state.text}</div>
        <input type="text" id="text" value="Escribí acá " />
        <div className='game-board'></div>
        <Botones value="Aceptar" cambiar={this.cambiarTexto} />
      </div>

    )
  }
}

function calcularWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}
export default Game