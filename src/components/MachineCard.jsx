function MachineCard({ name, zone, status, production }) {
    return (
        <div>
            <h3>Nom de la machine : {name}</h3>
            <p>Zone de la machine : {zone}</p>
            <p>Statut de la machine : {status}</p>
            <p>Production total de cette machine : {production}</p>
            <hr/>
        </div>
    )
}

export default MachineCard;