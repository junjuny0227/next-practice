import axios from "axios";

const getData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

const UserPage = async () => {
  const users = await getData();

  return (
    <div>
      <h1>User Page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPage;
