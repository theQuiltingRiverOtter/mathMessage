import LegendTable from "./LegendTable";

export default function Legend({ rows }) {
    return (
        <div className="legendContainer">
            <LegendTable rows={rows.slice(0, 13)} />
            <LegendTable rows={rows.slice(13)} />
        </div>
    );
}
