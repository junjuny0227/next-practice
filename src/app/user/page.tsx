import axios from "axios";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const getData = async () => {
  const { data } = await axios.get<User[]>(
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
