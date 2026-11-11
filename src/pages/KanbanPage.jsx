import KanbanColumn from "../components/KanbanColumn";

const STATUS = ["En fonctionnement","À l'arrêt","En Panne"];

function KanbanPage({machines,onStatusChange}){
    return (
        <div>
            <h2>Tableau Kanban</h2>
            <div className="kanban">
                {STATUS.map((statut)=>(
                    <KanbanColumn 
                    key={statut}
                    statut={statut}
                    machines={machines.filter((m) => m.status === statut)}
                    onDropMachine={onStatusChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default KanbanPage