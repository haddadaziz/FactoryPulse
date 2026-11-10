import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddMachine from "./pages/AddMachine";
import Machines from "./pages/Machines";
import Navbar from "./components/Navbar";

function App() {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleUpdateStatus = (id, newStatus) => {
    setMachines((prevMachines) => prevMachines.map((machine) => machine.id === id ? { ...machine, status: newStatus } : machine));
  };
  const handleDeleteMachine = (id) => {
    const confirmed = window.confirm("Etes vous sur de vouloir supprimer cette machine ?");
    if (confirmed) {
      setMachines((prevMachines) => prevMachines.filter((machine) => machine.id !== id));
    }
  };
  const handleAddMachine = (newMachine) => {
    const nextId = machines.length > 0 ? Math.max(...machines.map((m) => m.id)) + 1 : 1;
    const machineWithId = {...newMachine,id:nextId};

    setMachines((prevMachines) => [...prevMachines,machineWithId]);
  }

  useEffect(() => {
    fetch("/machines.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Impossible de charger les données");
        }
        return res.json();
      })
      .then((data) => {
        setMachines(data);
      })
      .catch((err) => {
        setError("Impossible de charger les machines");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <>
      <Navbar />

      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}

      {!loading && !error &&

        (<Routes>
          <Route path="/" element={<Dashboard machines={machines} />} />
          <Route path="/machines/new" element={<AddMachine onAddMachine={handleAddMachine} />} />
          <Route path="/machines" element={<Machines machines={machines} onUpdateStatus={handleUpdateStatus} onDeleteMachine={handleDeleteMachine} />} />
        </Routes>)}
    </>
  );
}

export default App;