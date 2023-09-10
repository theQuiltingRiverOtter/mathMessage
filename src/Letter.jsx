export default function Letter({ i, j, letter, update }) {
    return (
        <div className="letter problem">
            <input
                className="inputCell"
                onChange={update}
                type="text"
                maxLength="1"
                name={`${i},${j}`}
                id={letter}
            />
            <label className=".label" htmlFor={`${i},${j}`}>
                {letter}
            </label>
        </div>
    );
}

