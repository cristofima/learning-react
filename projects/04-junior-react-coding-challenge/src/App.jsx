import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact });

  return (
    <main>
      <h1>Cats app</h1>

      <button onClick={refreshFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
