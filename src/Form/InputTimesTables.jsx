export default function InputTimesTables({ updateData }) {
    return (
        <fieldset>
            <legend>Choose Times Tables (must choose at least 4) </legend>

            <div>
                <input type="checkbox" id="ones" name="1" onChange={updateData} />
                <label htmlFor="1">1</label>
            </div>
            <div>
                <input type="checkbox" id="two" name="2" onChange={updateData} />
                <label htmlFor="2">2</label>
            </div>
            <div>
                <input type="checkbox" id="threes" name="3" onChange={updateData} />
                <label htmlFor="3">3</label>
            </div>
            <div>
                <input type="checkbox" id="fours" name="4" onChange={updateData} />
                <label htmlFor="4">4</label>
            </div>
            <div>
                <input type="checkbox" id="fives" name="5" onChange={updateData} />
                <label htmlFor="5">5</label>
            </div>
            <div>
                <input type="checkbox" id="sizes" name="6" onChange={updateData} />
                <label htmlFor="6">6</label>
            </div>
            <div>
                <input type="checkbox" id="sevens" name="7" onChange={updateData} />
                <label htmlFor="7">7</label>
            </div>

            <div>
                <input type="checkbox" id="eights" name="8" onChange={updateData} />
                <label htmlFor="8">8</label>
            </div>
            <div>
                <input type="checkbox" id="nines" name="9" onChange={updateData} />
                <label htmlFor="9">9</label>
            </div>
            <div>
                <input type="checkbox" id="tens" name="10" onChange={updateData} />
                <label htmlFor="10">10</label>
            </div>

            <div>
                <input type="checkbox" id="elevens" name="11" onChange={updateData} />
                <label htmlFor="11">11</label>
            </div>
            <div>
                <input type="checkbox" id="twelves" name="12" onChange={updateData} />
                <label htmlFor="12">12</label>
            </div>
        </fieldset>
    );
}
