import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  const [estado, setEstado] = useState("Entrada");

  const [palpite, setPalpite] = useState(150);
  const [nPalpite, setNPalpite] = useState(1);
  const [minimo, setMinimo] = useState(0);
  const [max, setMax] = useState(300);

  const IniciarJogo = () => {
    setEstado("Rodando");
    setPalpite(150);
    setNPalpite(1);
    setMinimo(0);
    setMax(300);
  };
  const menor = () => {
    setNPalpite(nPalpite + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - minimo) / 2) + minimo;

    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNPalpite(nPalpite + 1);
    setMinimo(palpite);

    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>Acertei o número é {palpite}</p>
        <button onClick={IniciarJogo}>Iniciar jogo novamente</button>
      </div>
    );
  }

  if (estado === "Entrada") {
    return <button onClick={IniciarJogo}> Começar a jogar </button>;
  }

  return (
    <div className="App">
      <p>O seu número é {palpite} ?</p>
      <p>
        Min : {minimo} / Máximo : {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}> Acertou </button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
