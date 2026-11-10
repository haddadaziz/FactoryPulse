import StatCard from "../components/StatCard";

function Dashboard({ machines }) {

    const machinesFonctionnelles = machines.filter((machine) => machine.status === "En fonctionnement");
    const machinesEnPanne = machines.filter((machine) => machine.status === "En Panne");
    return (
        <div>
            <h1>Dashboard</h1>
            <StatCard label="Nombre total de machines" value={machines.length}/>
            <StatCard label="Nombre total de machines en fonctionnement" value={machinesFonctionnelles.length}/>
            <StatCard label="Nombre total de machines en Panne" value={machinesEnPanne.length}/>;
        </div>
    );
}

export default Dashboard;