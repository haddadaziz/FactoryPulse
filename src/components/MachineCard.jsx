function MachineCard({ id,name, zone, status, production, onUpdateStatus }) {
    return (
        <div>
            <h3>Nom de la machine : {name}</h3>
            <p>Zone de la machine : {zone}</p>
            <strong>Statut :</strong>
            <select value={status} onChange={(e) => onUpdateStatus(id,e.target.value)}>
                <option value="En fonctionnement">En fonctionnement</option>
                <option value="À l'arrêt">À l'arrêt</option>
                <option value="En Panne">En Panne</option>
            </select>
            <p>Production total de cette machine : {production}</p>
            <hr/>
        </div>
    )
}

export default MachineCard;