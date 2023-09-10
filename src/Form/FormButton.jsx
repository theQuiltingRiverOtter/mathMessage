export default function FormButton({ btnText, handleClick, formId = "" }) {
  return (
    <button className="submit" id={formId} type="submit" onClick={handleClick}>
      {btnText}
    </button>
  );
}
