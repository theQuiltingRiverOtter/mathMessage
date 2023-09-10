export default function InputCheck({ checkLoaded }) {
    return (
        <div>
            <label htmlFor="getRandomQuote">Get Random Quote</label>
            <input type="checkbox" name="getRandomQuote" onChange={checkLoaded} />
        </div>
    );
}
