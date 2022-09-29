import Table from "../components/users/Table";

const Users = () => {
  const users = [
    {
      id: 0,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Kelvis Delapena",
      office: "Software developer",
      access: "Employee",
    },
    {
      id: 1,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Fernando Silva",
      office: "Software developer",
      access: "Employee",
    },
    {
      id: 2,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Stefany Delapena",
      office: "Inside sales",
      access: "Employee",
    },
    {
      id: 3,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Kelly Fernanda",
      office: "Human recurses",
      access: "Admin",
    },
  ];
  return (
    <div className="m-10">
      <div className="mb-10">
        <h1 className="font-black text-lg">Users</h1>
        <h3 className="text-sm">Manage and add new users</h3>
      </div>
      <table>
        <tbody>
          {users.map((user, index) => {
            return (
              <>
                <Table key={index} {...user} />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
