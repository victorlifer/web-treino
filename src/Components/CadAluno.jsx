import React, { useState } from 'react';

function CadAluno() {
  const [formData, setFormData] = useState({
    nome: '',
    dataInicio: '',
    professor: '',
    peso: '',
    altura: '',
    perimetria: {
      esquerdo: '',
      direito: '',
    },
    patologias: {
      hipertensao: false,
      diabetes: false,
      fibromialgia: false,
      artrite: false,
    },
    lesao: '',
    medicamentos: '',
    estadoAtivo: '',
    modalidade: '',
    frequenciaSemanal: '',
    objetivo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        patologias: {
          ...prev.patologias,
          [name]: checked,
        },
      }));
    } else if (name === 'perimetriaEsquerdo' || name === 'perimetriaDireito') {
      setFormData((prev) => ({
        ...prev,
        perimetria: {
          ...prev.perimetria,
          [name === 'perimetriaEsquerdo' ? 'esquerdo' : 'direito']: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Ficha cadastral enviada com sucesso!');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ficha Cadastral do Aluno</h1>
      <form onSubmit={handleSubmit}>
        {/* Dados do Aluno */}
        <div className="mb-3">
          <label className="form-label">Nome do Aluno:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Data de Início:</label>
          <input
            type="date"
            className="form-control"
            name="dataInicio"
            value={formData.dataInicio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Professor:</label>
          <input
            type="text"
            className="form-control"
            name="professor"
            value={formData.professor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Peso (kg):</label>
          <input
            type="number"
            className="form-control"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Altura (cm):</label>
          <input
            type="number"
            className="form-control"
            name="altura"
            value={formData.altura}
            onChange={handleChange}
            required
          />
        </div>

        {/* Perimetria */}
        <h3>Perimetria (cm)</h3>
        <div className="mb-3">
          <label className="form-label">Lado Esquerdo:</label>
          <input
            type="number"
            className="form-control"
            name="perimetriaEsquerdo"
            value={formData.perimetria.esquerdo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lado Direito:</label>
          <input
            type="number"
            className="form-control"
            name="perimetriaDireito"
            value={formData.perimetria.direito}
            onChange={handleChange}
          />
        </div>

        {/* Patologias */}
        <h3>Patologias</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="hipertensao"
            checked={formData.patologias.hipertensao}
            onChange={handleChange}
          />
          <label className="form-check-label">Hipertensão</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="diabetes"
            checked={formData.patologias.diabetes}
            onChange={handleChange}
          />
          <label className="form-check-label">Diabetes</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="fibromialgia"
            checked={formData.patologias.fibromialgia}
            onChange={handleChange}
          />
          <label className="form-check-label">Fibromialgia</label>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="artrite"
            checked={formData.patologias.artrite}
            onChange={handleChange}
          />
          <label className="form-check-label">Artrite</label>
        </div>

        {/* Outras Informações */}
        <div className="mb-3">
          <label className="form-label">Alguma Lesão?</label>
          <input
            type="text"
            className="form-control"
            name="lesao"
            value={formData.lesao}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Faz uso de algum medicamento? Qual?</label>
          <input
            type="text"
            className="form-control"
            name="medicamentos"
            value={formData.medicamentos}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Estado (Ativo/Parado):</label>
          <input
            type="text"
            className="form-control"
            name="estadoAtivo"
            value={formData.estadoAtivo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Modalidade Praticada:</label>
          <input
            type="text"
            className="form-control"
            name="modalidade"
            value={formData.modalidade}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Frequência Semanal:</label>
          <input
            type="number"
            className="form-control"
            name="frequenciaSemanal"
            value={formData.frequenciaSemanal}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Principal Objetivo:</label>
          <textarea
            className="form-control"
            name="objetivo"
            value={formData.objetivo}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Botão de Enviar */}
        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CadAluno;
