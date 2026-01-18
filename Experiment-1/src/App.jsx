function App(){
  return (
    <div>
      <h1>First Component</h1>
      <h1>Second Component</h1>
      <Fruit />
      <Color />
    </div>
  )
}
export default App;

function Fruit(){
  return <h1>Apple</h1>
}

function Color(){
  return <h1>Red Color</h1>
} 