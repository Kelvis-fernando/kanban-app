import HeaderPage from "../components/HeaderPage";
const Kanban = () => {
  return (
    <div className="m-10">
      <HeaderPage title={"Kanban"} subtitle={"Manage the tasks from enterprise."} />
      <div className="grid grid-cols-3 grid-flow-col gap-4">
        <div>
          <div>Header kanban</div>
          <div>
            <div>Card</div>
          </div>
        </div>
        <div>
          <div>Header kanban</div>
          <div>
            <div>Card</div>
          </div>
        </div>
        <div>
          <div>Header kanban</div>
          <div>
            <div>Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
