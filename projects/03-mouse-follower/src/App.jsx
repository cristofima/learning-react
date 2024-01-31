import { useState, useEffect } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('effect ', { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // cleanup:
    // -> when the component is disassembled
    // -> when dependencies change, before running the effect again
    return () => { // cleanup method
      console.log('cleanup');
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} follow pointer
      </button>
    </main>
  )
}

export default App
