import { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import { URL } from "./config"

function App() {

  const [employees, setEmployees] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)



  const getData = async () => {
    const response = await fetch(URL)

    try {
      if (!response.ok) {
        throw Error("could not get the data")
      } else {
        const data = await response.json()
        setEmployees(data)
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      setIsPending(false)
      setError(err.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])





  return (
    <div className="container row">
      <AddPerson employees={employees} URL={URL} getData={getData} />
      {error && <div className="col-9"> <p className="text-center mt-5 text-danger">{error}</p>  </div>}
      {isPending && <div className="col-9"> <p className="text-center mt-5 text-danger">Loading...</p>  </div>}
      {employees &&
        <PersonList
          employees={employees}
          getData={getData}
          URL={URL}
        />}
    </div>
  );
}

export default App;
