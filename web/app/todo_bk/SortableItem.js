import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: "skyblue",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        cursor: "grab",
        textAlign: "center",
        width: 150
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.id}
        </div>
    );
}
