export default function InputMathType({ updateData }) {
    return (
        <div>
            <label htmlFor="mathType">Choose Math Type: </label>
            <select onChange={updateData} name="mathType" id="mathType">
                <option value="none">Select...</option>
                <option value="multiplication">Multiplication</option>
                <option value="multAndDiv">Multiplication & Division</option>
                <option value="division">Division</option>
            </select>
        </div>
    );
}
