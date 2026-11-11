import {useState} from "react";
import KanbanCard from "./KanbanCard";

function KanbanColumn({status,machines,onDropMachine}){
    const [isOver,setIsOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsOver(true);
    };

    const handleDrop = (e) =>{
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        onDropMachine(id,status);
        setIsOver(false);
    };

    return (
        <div className={`kanban-column ${isOver ? "kanban-column--over" :""}`} onDragOver={handleDragOver} onDragLeave={() => setIsOver(false)} onDrop={handleDrop}>
            <h3>{status} ({machines.length})</h3>
            {machines.map((m) =>(
                <KanbanCard key={m.id} machine={m}/>
            ))}
        </div>
    );
}

export default KanbanColumn;