import './Pension.css';
import { useInput } from "./hooks";
import CalculateProjectedValue from "./CalculateProjectedValue";
import { FaTrash } from "react-icons/fa";
import { usePensions } from "./PensionProvider";

export default function Pension({ id, provider, policy, retirementAge, pensionValue }) {
  const { removePension } = usePensions();
  const myParams = {retirementAge, pensionValue};
  const [providerName, resetProviderName] = useInput(provider);
  return (
    <section className="pensionTile" >
      <div>
        <form>
          <input
          className="providerNameStyle"
          {...providerName}
          type="text" 
          placeholder="Click to add Name"
          required
          />
        </form> 
        <h2>Policy number: {policy}</h2>
        <div>Retirement Age: {retirementAge}</div>
        <div>Pension value: {pensionValue}</div>
        <div>Projected value: <CalculateProjectedValue {...myParams} /></div>
        <button
          onClick={() => removePension(id)}
        >
          <FaTrash />
        </button>
      </div>
    </section>
  );
}
