import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// importando as páginas
import CadAluno from './Components/CadAluno';
import FichaTreino from './Components/FichaTreino';

//função principal do compoment App
function App(){
  return(
    <div>
      <div className="text">
        <h1>Sua rotina de treino</h1>
      </div>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CadAluno" element={<CadAluno />} /> 
        <Route path="/treino" element={<FichaTreino />} />
      </Routes>

    </BrowserRouter>
      <div className="bar-lateral">  
        <button>Home</button><br/>
        <button>Cadastro de aluno</button><br/>
        <button>Treino</button><br/>
        <button>Como montar seu treino</button>
        <button>Dieta</button>
      </div>
    </div>
  )
}

export default App;