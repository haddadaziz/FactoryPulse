import KanbanColumn from "../components/KanbanColumn";

const STATUS = ["En fonctionnement","À l'arrêt","En Panne"];

function KanbanPage({machines,onUpdateStatus}){
    return (
        <div>
            <h2>Tableau Kanban</h2>
            <div className="kanban">
                {STATUS.map((statut)=>(
                    <KanbanColumn 
                    key={statut}
                    status={statut}
                    machines={machines.filter((m) => m.status === statut)}
                    onDropMachine={onUpdateStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default KanbanPage