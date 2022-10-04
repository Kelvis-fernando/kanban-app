import HeaderPage from "../components/HeaderPage";
import Card from "../components/kanban/Card";

const Kanban = () => {
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
      <div className="grid grid-cols-3 grid-flow-col gap-4">
        <div className="bg-zinc-700 p-1 rounded-md">
          <div className="bg-zinc-900 px-2 rounded-md w-full text-center">Header kanban</div>
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
        <div className="bg-zinc-700 p-1 rounded-md">
          <div className="bg-zinc-900 px-2 rounded-md w-full text-center">Header kanban</div>
          <Card />
        </div>
        <div className="bg-zinc-700 p-1 rounded-md">
          <div className="bg-zinc-900 px-2 rounded-md w-full text-center">Header kanban</div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Kanban;
