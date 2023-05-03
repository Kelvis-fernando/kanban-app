import { ChatText } from "phosphor-react";
import CardType from "../../types/Card";
import "../../styles/kanban.css";

interface CardProps {
  card?: CardType;
}

const Card = ({ card }: CardProps) => {
  const validateStatus = (status: string) => {
    switch (status) {
      case "High level":
        return "bg-red-200";
      case "Mid level":
        return "bg-blue-200";
      case "Low level":
        return "bg-green-200";
    }
  };

  return (
    <div className="card-container">
      <header className="card-header">
        <ChatText size={20} />
        {card!.messages.length > 0 && card?.messages.length}
        <span
          className={`card-status ${validateStatus(
            card!.status
          )}`}
        >
          {card?.status}
        </span>
      </header>
      <div className="card-data">
        <h5>{`${card?.name},${card?.createdAt} hours`}</h5>
        <p>{card?.description}</p>
      </div>
    </div>
  );
};

export default Card;
