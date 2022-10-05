interface ColumProps {
  colum: {
    id: number;
    name: string;
  };
  children?: JSX.Element | JSX.Element[];
}
const Colum = ({ colum, children }: ColumProps) => {
  return (
    <div className="bg-zinc-700 p-1 rounded-md max-w-[300px]">
      <div className="bg-zinc-900 px-2 rounded-md w-full text-center">{colum.name}</div>
      {children}
    </div>
  );
};

export default Colum;
