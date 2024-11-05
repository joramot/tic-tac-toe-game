import './index.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const board = Array(9).fill(null)

function App() {

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <div className="cell" key={index}>
                <span className="cell_content">
                  {index}
                </span>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
