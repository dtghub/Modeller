import './Pension.css';
import { useInput } from "./hooks";
import CalculateProjectedValue from "./CalculateProjectedValue";
import { FaTrash } from "react-icons/fa";
import { usePensions } from "./PensionProvider";

export default function Pension({ id, provider, policy, pensionValue }) {
  const { removePension } = usePensions();
  const { retirementAge } = usePensions();
  const myParams = {retirementAge, pensionValue};
  const [providerName, resetProviderName] = useInput(provider);
  //2 different outputs needed; inhouse policies need to display current value and a projected value, 3rd party policies need the user to supply the details and a projected value. Probably best decide on a way to split this into 2 different but related components
  //also need to add a tile to allow the user to state what retirement age to be used - this will be needed for the in-house tiles anyway as they do projections.
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
