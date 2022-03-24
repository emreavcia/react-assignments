import { useEffect, useState, useRef } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import { URL } from "./config"

function App() {


  const [employees, setEmployees] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const form = useRef(null)


  const emptyNewPersonObject = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    about: ""
  }

  const [newEployee, setNewEmployee] = useState(emptyNewPersonObject)

  const handleChange = (event) => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 1
    setNewEmployee({
      ...newEployee,
      id,
      [event.target.name]: event.target.value,
    })

  }

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
      <AddPerson
        newEployee={newEployee}
        URL={URL}
        getData={getData}
        handleChange={handleChange}

      />

      {error && <div className="col-9"> <p className="text-center mt-5 text-danger">{error}</p></div>}
      {isPending && <div className="col-9"> <p className="text-center mt-5 text-danger">Loading...</p></div>}

      {employees &&
        <PersonList
          employees={employees}
          getData={getData}
          URL={URL}
          form={form}
        />
      }

    </div>
  );
}

export default App;
