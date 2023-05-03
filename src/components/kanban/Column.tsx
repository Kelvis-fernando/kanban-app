import "../../styles/kanban.css";
import { ColumProps } from "../../types/Kanban";

const Column = ({ column, children }: ColumProps) => {
  return (
    <div className="column-container">
      <div className="column-content">{column.name}</div>
      {children}
    </div>
  );
};

export default Column;
