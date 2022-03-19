import { useEffect, useState } from "react";

function App() {

  const [employees, setEmployees] = useState([])

  const getData = async () => {
    const response = await fetch("http://localhost:3001/employees")
    const data = await response.json()
    setEmployees(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container row">
      <AddPerson handleForm={handleForm} />
      {error && <div className="col-9"> <p className="text-center mt-5 text-danger">{error}</p>  </div>}
      {isPending && <div className="col-9"> <p className="text-center mt-5 text-danger">Loading...</p>  </div>}
      {employees &&
        <PersonList
          setEmployees={setEmployees}
          employees={employees} />}
    </div>
  );
}

export default App;
