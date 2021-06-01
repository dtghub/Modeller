import CalculateProjectedValue from "./CalculateProjectedValue";
import { FaTrash } from "react-icons/fa";
import { usePensions } from "./PensionProvider";

export default function Pension({ id, provider, policy, nrd, pensionValue }) {
  const { removePension } = usePensions();
  const myParams = {retirementAge: nrd, policyValue: pensionValue};
  return (
    <section>
      <div style={{border:"1px solid red"}}>
        <h1>Provider: {provider}</h1>
        <h2>Policy number: {policy}</h2>
        <div>Retirement Age: {nrd}</div>
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
