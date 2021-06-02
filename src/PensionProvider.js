import { createContext, useState, useContext } from "react";
import pensionData from "./pension-details.json"; 
import { v4 } from "uuid";

const PensionContext = createContext();
export const usePensions = () => useContext(PensionContext);

export default function PensionProvider({ children }) {
  const [pensions, setPensions] = useState(pensionData);

  const addPension = (provider, policy, nrd, pensionValue) =>
    setPensions([
      ...pensions,
      {
        id: v4(),
        provider,
        policy,
        nrd,
        pensionValue
      }
    ]);

  const removePension = id => setPensions(pensions.filter(pension => pension.id !== id));

  return (
    <PensionContext.Provider value={{ pensions, addPension, removePension }}>
      {children}
    </PensionContext.Provider>
  );
}
