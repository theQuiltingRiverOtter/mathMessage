export default function InputMessage({ updateData }) {
    return (
        <div>
            <label className="label" htmlFor="message">
                Message
            </label>
            <input
                className="input"
                type="text"
                id="message"
                name="message"
                onChange={updateData}
            />
        </div>
    );
}
