import { ChatText } from "phosphor-react";

const Card = () => {
  return (
    <div className="p-2 max-w-[300px] flex flex-col items-center bg-zinc-900 my-2 mx-2 rounded-sm transparent">
      <header className=" flex space-x-28">
        <ChatText size={20} />
        <span className="text-sm px-1 rounded-lg backdrop-blur-3xl bg-red-500">Status</span>
      </header>
      <div className="flex flex-col items-start">
        <h5 className="text-[12px] text-zinc-400 py-2">Kelvis Delapena, 16 hours ago</h5>
        <p className="text-sm text-center text-zinc-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde enim dolor obcaecati
          vel quo odit facilis, molestias ad repudiandae, voluptas.
        </p>
      </div>
    </div>
  );
};

export default Card;
