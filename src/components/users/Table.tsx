import { Pencil, XCircle } from "phosphor-react";
import Avatar from "./Avatar";

interface TableProps {
  id: number;
  avatar: string;
  name: string;
  office: string;
  access: string;
}

const Table = ({ avatar, name, office, access }: TableProps) => {
  return (
    <tr className="flex items-center bg-zinc-700 h-16 p-2 m-2 rounded-lg hover:bg-violet-800 hover:transition-colors">
      <Avatar image={avatar} />
      <th className="text-sm font-black mx-4">{name}</th>
      <th className="flex flex-col mx-4">
        <span className="text-sm font-black">{office}</span>
        <span className="text-sm">{access}</span>
      </th>
      <th className="mx-4">
        <Pencil className="hover:text-zinc-300" size={25} />
        <XCircle className="hover:text-zinc-300" size={25} />
      </th>
    </tr>
  );
};

export default Table;
