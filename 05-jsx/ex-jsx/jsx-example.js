const randomNumber = Math.random();
const randomArray = [
  Math.random(),
  Math.random(),
  Math.random(),
]

function DisplayRandNumber() {
  return (
    <h1>
      {
        randomNumber
      }
    </h1>  
  )
}

function HighLow() {
  return (
    <h1>
      {
        randomNumber > 0.5 ? 'High' : 'Low'
      }
    </h1>
  )
}

function NumberList() {
  return (
    <ul>
      {
        randomArray.map((num, index) => {
          return (
            <li key={index}>
              {
                num
              }
            </li>
          )
        })
      }
    </ul>
  )
}

function App() {
  return (
    <div>
      <DisplayRandNumber />
      <HighLow />
      <NumberList />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);