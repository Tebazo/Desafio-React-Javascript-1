import './App.css';
import { useState } from 'react';

function App() {
  const [circulo, setCirculo] = useState([]);
  const [refaz, setRefeito] = useState([]);

  const MarcaCiruclo = (e) => {
    const novocirculo = {
      clientX: e.clientX,
      clientY: e.clientY
    };
    setCirculo((antigo) => [...antigo, novocirculo])
    setRefeito([])
  };

  const deletaCirculo = (event) => {
    if (circulo.length === 0) {
      return;
    }
    event.stopPropagation();
    const ultimoitem = circulo[circulo.length - 1];
    setRefeito((antigo) => [...antigo, ultimoitem]);


    setCirculo((antigo) => {
      const array = [...antigo].slice(0, -1);
      return array
    })
  }

  const refazCirculo = (event) => {
    event.stopPropagation();

    if (refaz.length === 0) {
      return;
    }

    const recuperacirculo = refaz[refaz.length - 1];
    setRefeito((antigo) => {
      const array = [...antigo].slice(0, -1);
      return array
    })
    setCirculo((antigo) => [...antigo, recuperacirculo])
  }



  return (
   
      <div className='page' onClick={MarcaCiruclo}>
        {circulo.map((item) => (
          <div className='dot' style={{ left: item.clientX, top: item.clientY }} />
        ))}
        <button className='desfazer-btn' onClick={deletaCirculo}>Desfazer</button>
        <button className='refazer-btn' onClick={refazCirculo}>Resfazer</button>
      </div>
  );
}

export default App;
