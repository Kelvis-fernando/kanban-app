import Table from "../components/users/Table";

const Users = () => {
  const users = [
    { id: 0, name: "Kelvis Delapena", office: "Software developer", access: "Employee" },
    { id: 1, name: "Fernando Silva", office: "Software developer", access: "Employee" },
    { id: 2, name: "Stefany Delapena", office: "Inside sales", access: "Employee" },
    { id: 3, name: "Kelly Fernanda", office: "Human recurses", access: "Admin" },
  ];
  return (
    <div className="m-10 w-full">
      <h1>Users</h1>
      <table className="mt-8">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Office</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <Table key={index} {...user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
