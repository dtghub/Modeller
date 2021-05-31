import CalculateProjectedValue from "./CalculateProjectedValue";
import { FaTrash } from "react-icons/fa";
import { usePensions } from "./PensionProvider";

export default function Pension({ id, provider, policy, nrd, value }) {
  const { removePension } = usePensions();
  return (
    <section>
      <div>
        <h1>{provider}</h1>
        <h2>{policy}</h2>
        {nrd}
        {value}
        <button
          onClick={() => removePension(id)}
        >
          <FaTrash />
        </button>
      </div>
    </section>
  );
}
