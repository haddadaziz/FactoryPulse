function KanbanCard({machine}){
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", String(machine.id));
        e.dataTransfer.effectAllowed = "move";
    };

    return (
        <div className="kanban-card" draggable onDragStart={handleDragStart}>
            <h4>{machine.name}</h4>
            <p>Zone : {machine.zone}</p>
            <p>Production : {machine.production} pièces</p>
        </div>
    );
}

export default KanbanCard;