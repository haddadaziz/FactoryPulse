import MachineCard from "../components/MachineCard";
import { useState } from "react";

function Machines({ machines, onUpdateStatus }) {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Tous");

    const filteredMachines = machines.filter((machine) => {
        const matchesSearch = machine.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "Tous" || machine.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div>
            <h1>Machines</h1>
            <div>
                <input type="text" placeholder="Rechercher une machine par nom ..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="Tous">Tous les statuts</option>
                    <option value="En fonctionnement">En fonctionnement</option>
                    <option value="À l'arrêt">À l'arrêt</option>
                    <option value="En panne">En panne</option>
                </select>
                <button onClick={() => { setSearch(""); setStatusFilter("Tous"); }}>Réinitialiser les filtres</button>
            </div>

            {filteredMachines.length === 0 && (
                <p>Aucune Machine ne correspond à votre recherche</p>
            )}
            <div className="machines-grid">
                {filteredMachines.map((machine) => (
                    <MachineCard
                        key={machine.id}
                        id={machine.id}
                        name={machine.name}
                        zone={machine.zone}
                        status={machine.status}
                        production={machine.production}
                        onUpdateStatus={onUpdateStatus}
                    />
                ))}
            </div>
        </div>
    )
}

export default Machines;