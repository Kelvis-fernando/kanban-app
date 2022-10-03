import HeaderPage from "../components/HeaderPage";
import Card from "../components/kanban/Card";
const Kanban = () => {
  return (
    <div className="m-10">
      <HeaderPage title={"Kanban"} subtitle={"Manage the tasks from enterprise."} />
      <div className="grid grid-cols-3 grid-flow-col gap-4">
        <div className="bg-zinc-700 p-1 rounded-md">
          <div className="bg-zinc-900 px-2 rounded-md w-full text-center">Header kanban</div>
          <Card />
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
