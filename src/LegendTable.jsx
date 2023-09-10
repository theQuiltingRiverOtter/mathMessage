export default function LegendTable({ rows }) {
    return (
        <ul>
            {rows.map((row, i) => (
                <li key={i}>{row}</li>
            ))}
        </ul>
    );
}
