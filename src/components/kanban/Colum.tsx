const Colum = (props: any) => {
  return (
    <div className="bg-zinc-700 p-1 rounded-md">
      <div className="bg-zinc-900 px-2 rounded-md w-full text-center">{props.colum.name}</div>
      {props.children}
    </div>
  );
};

export default Colum;
