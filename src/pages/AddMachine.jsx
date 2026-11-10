import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddMachine({ onAddMachine }) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [zone, setZone] = useState("");
    const [status, setStatus] = useState("En fonctionnement");
    const [production, setProduction] = useState(0);

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setErrorMessage("Le nom de la machine est obligatoire");
            return;
        }
        if (!zone.trim()) {
            setErrorMessage("La zone de production est obligatoire");
            return;
        }

        const prodNumber = Number(production);
        if (isNaN(prodNumber) || prodNumber < 0 || !Number.isInteger(prodNumber)) {
            setErrorMessage("La production journaliere doit être un nombre entier supérieur ou égal à 0");
            return;
        }

        onAddMachine({
            name: name.trim(),
            zone: zone.trim(),
            status: status,
            production: prodNumber
        });

        navigate("/machines");
    }

    return (
        <div>
            <h3>Ajouter une Machine</h3>
            {errorMessage && (
                <p>{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom de la machine: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Tournevis CNC" />
                </div>
                <div>
                    <label>Zone de production :</label>
                    <input type="text" value={zone} onChange={(e) => setZone(e.target.value)} placeholder="Ex: Atelier A" />
                </div>
                <div>
                    <label>Statut :</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="En fonctionnement">En fonctionnement</option>
                        <option value="À l'arrêt">À l'arrêt</option>
                        <option value="En Panne">En Panne</option>
                    </select>
                </div>

                <div>
                    <label>Production journalière :</label>
                    <input type="number" value={production} onChange={(e) => setProduction(e.target.value)} min="0" />
                </div>

                <button type="submit">Enregistrer la machine</button>
            </form>
        </div>
    );
}

export default AddMachine;