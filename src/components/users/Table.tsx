import { Pencil, XCircle } from "phosphor-react";

interface TableProps {
  id: number;
  name: string;
  office: string;
  access: string;
}

const Table = ({ id, name, office, access }: TableProps) => {
  return (
    <tr>
      <td>{id + 1}</td>
      <td>{name}</td>
      <td>{office}</td>
      <td>{access}</td>
      <td className="flex">
        <Pencil className="hover:text-zinc-300" size={25} />
        <XCircle className="hover:text-zinc-300" size={25} />
      </td>
    </tr>
  );
};

export default Table;
