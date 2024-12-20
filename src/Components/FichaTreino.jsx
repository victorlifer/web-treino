import React from "react";

function Card() {
  const treinoSemanal = [
    {
      dia: "Segunda-feira",
      grupoMuscular: "Peito e Tríceps",
      exercicios: ["Supino Reto", "Supino Inclinado", "Crossover", "Tríceps Pulley", "Mergulho"],
    },
    {
      dia: "Terça-feira",
      grupoMuscular: "Costas e Bíceps",
      exercicios: ["Puxada Frontal", "Remada Baixa", "Barra Fixa", "Rosca Direta", "Rosca Martelo"],
    },
    {
      dia: "Quarta-feira",
      grupoMuscular: "Pernas",
      exercicios: ["Agachamento Livre", "Leg Press", "Cadeira Extensora", "Cadeira Flexora", "Panturrilha no Leg"],
    },
    {
      dia: "Quinta-feira",
      grupoMuscular: "Ombros e Trapézio",
      exercicios: ["Desenvolvimento Militar", "Elevação Lateral", "Elevação Frontal", "Encolhimento com Barra"],
    },
    {
      dia: "Sexta-feira",
      grupoMuscular: "Peito e Tríceps",
      exercicios: ["Crucifixo Inclinado", "Supino Declinado", "Paralelas", "Tríceps Coice", "Supino Fechado"],
    },
    {
      dia: "Sábado",
      grupoMuscular: "Costas e Bíceps",
      exercicios: ["Remada Curvada", "Puxada Aberta", "Pull-Over", "Rosca Concentrada", "Rosca Inversa"],
    },
    {
      dia: "Domingo",
      grupoMuscular: "Descanso ou Atividade Leve",
      exercicios: ["Alongamento", "Caminhada Leve", "Yoga"],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Plano de Treino Semanal</h1>
      <div className="accordion" id="treinoAccordion">
        {treinoSemanal.map((treino, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {treino.dia} - {treino.grupoMuscular}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#treinoAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {treino.exercicios.map((exercicio, i) => (
                    <li className="list-group-item" key={i}>
                      {exercicio}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
