import HeaderPage from "../components/HeaderPage";
import Modal from "../components/Modal";
import Nav from "../components/Nav";
import Table from "../components/users/Table";
import useModal from "../hooks/useModal";

const Users = () => {
  const { isModalOpen, setModalOpen } = useModal();

  const users = [
    {
      id: 0,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Kelvis Delapena",
      email: "kelvisdelapena@gmail.com",
      role: "Software developer",
      access: "Employee",
    },
    {
      id: 1,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Fernando Silva",
      email: "Fernando@gmail.com",
      role: "Software developer",
      access: "Employee",
    },
    {
      id: 2,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Stefany Delapena",
      email: "Stefany@gmail.com",
      role: "Inside sales",
      access: "Employee",
    },
    {
      id: 3,
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0650516e-ab8f-4407-996b-fbff5686d5a2-profile_image-70x70.png",
      name: "Kelly Fernanda",
      email: "Kelly@gmail.com",
      role: "Human recurses",
      access: "Admin",
    },
  ];

  return (
    <>
      <div className="flex space-x-auto">
        <Nav />
        <div className="m-10 px-3 py-4">
          <HeaderPage title={"Users"} subtitle={"Manage and add new users."} />
          <button
            className="my-2 bg-zinc-700 rounded px-2 py-1 hover:bg-zinc-600"
            onClick={() => setModalOpen(true)}
          >
            New user
          </button>
          <table>
            <tbody className="w-full text-md shadow-md rounded mb-4">
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
      </div>
      <Modal onCloseModal={() => setModalOpen(false)} isModalOpen={isModalOpen}>
        <h1>Adiciona usuario novo</h1>
      </Modal>
    </>
  );
};

export default Users;
