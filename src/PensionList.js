import Pension from "./Pension";
import { usePensions } from "./PensionProvider";

export default function PensionList() {
  const { pensions } = usePensions();

  if (!pensions.length) return <div>No Pensions Listed. (Add a Pension)</div>;

  return (
    <div>
      {pensions.map(pension => (
        <Pension key={pension.id} {...pension} />
      ))}
    </div>
  );
}
