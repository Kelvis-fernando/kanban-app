import { ChatText } from "phosphor-react";
import CardType from "../../types/Card";

interface CardProps {
  card?: CardType;
}

const Card = ({ card }: CardProps) => {
  const validateStatus = (status: string | undefined) => {
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
    <div className="p-2 max-w-[300px] flex flex-col items-center bg-zinc-900 my-2 mx-2 rounded-sm transparent cursor-pointer">
      <header className="text-sm flex space-x-28 gap-1">
        <ChatText size={20} />
        {card!.messages.length > 0 && card?.messages.length}
        <span
          className={`text-sm px-1 rounded-lg backdrop-blur-3xl text-black font-semibold ${validateStatus(
            card?.status
          )}`}
        >
          {card?.status}
        </span>
      </header>
      <div className="flex flex-col items-start">
        <h5 className="text-[12px] text-zinc-400 py-2">{`${card?.name},${card?.createdAt} hours`}</h5>
        <p className="text-sm text-center text-zinc-200">{card?.description}</p>
      </div>
    </div>
  );
};

export default Card;
