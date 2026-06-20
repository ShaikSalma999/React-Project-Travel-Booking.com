import useFetch from "./useFetch";
//import ",.FinalTask.css"

export default function Profile() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h1>Users</h1>

      {data.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </>
  );
}


