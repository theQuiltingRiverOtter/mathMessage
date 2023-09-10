import { produceTable, makeLegend, encodeMessage } from "./scripts/utils.jsx"
import "./styles/legend.css";
import React from "react";
import Message from "./Message";
import Legend from "./Legend";

export default function Container({ message, mathType, timesTables }) {
    let numbers = timesTables.split(",").map(Number);
    if (0 in numbers) {
        numbers.pop();
    }
    numbers = numbers.sort((a, b) => a - b);
    const problemTable = produceTable(numbers, mathType);
    const legend = makeLegend(problemTable);
    let rows = [];
    for (let row in legend) {
        const value = Object.keys(legend[row]);
        const markup = `${row.toUpperCase()}  -  ${value}`;
        rows.push(markup);
    }

    const newMessage = encodeMessage(message, legend);

    return (
        <div id="printable">
            <Message secretMessage={newMessage} origMessage={message} />
            <Legend rows={rows} />
        </div>
    );
}
