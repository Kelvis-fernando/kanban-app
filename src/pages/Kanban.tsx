import HeaderPage from "../components/HeaderPage";
import Card from "../components/kanban/Card";
import Colum from "../components/kanban/Colum";

const Kanban = () => {
  const colums = [
    { id: 0, name: "Not Started" },
    { id: 1, name: "Started" },
    { id: 2, name: "Finish" },
  ];

  const cards = [
    {
      id: 0,
      kanbanColum: 0,
      name: "Kelvis Delapena",
      status: "High level",
      createdAt: new Date(),
      messages: [],
      description: "Este card foi criado para a atualizacao de tasks no board",
    },
    {
      id: 1,
      kanbanColum: 0,
      name: "Stefany Fernanda",
      status: "Mid level",
      createdAt: new Date(),
      messages: [
        {
          name: "Kelvis Delapena",
          message: "Alterar cores",
        },
      ],
      description: "Ajuste de cores nas telas",
    },
    {
      id: 2,
      kanbanColum: 0,
      name: "Kelly Fernanda",
      status: "Low level",
      createdAt: new Date(),
      messages: [],
      description: "Teste de card",
    },
  ];
  return (
    <div className="m-10">
      <HeaderPage title={"Kanban"} subtitle={"Manage the tasks from enterprise."} />
      <div className="flex gap-4">
        {colums.map((colum, index) => {
          return (
            <Colum key={index} colum={colum}>
              {cards.map((card, index) => {
                return <Card key={index} card={card} />;
              })}
            </Colum>
          );
        })}
      </div>
    </div>
  );
};

export default Kanban;
