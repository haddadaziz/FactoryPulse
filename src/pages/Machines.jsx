import MachineCard from "../components/MachineCard";

function Machines({ machines }) {
    return (
        <div>
            <h1>Machines</h1>
            <div className="machines-grid">
                {machines.map((machine) => (
                    <MachineCard
                    key={machine.id}
                    name={machine.name}
                    zone={machine.zone}
                    status={machine.status}
                    production={machine.production}
                    />
                ))}
            </div>
        </div>
    )
}

export default Machines;