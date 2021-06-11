import { createContext, useState, useContext } from "react";
import pensionData from "./pension-details.json"; 
import { v4 } from "uuid";


const PensionContext = createContext();
export const usePensions = () => useContext(PensionContext);


export default function PensionProvider({ children }) {
  const [pensions, setPensions] = useState(pensionData);


  const [retirementAge, setRetirementAge] = useState(67);

  const updateRetirementAge = (newAge) => setRetirementAge(newAge);



  const addPension = (provider, policy, pensionValue) =>
    setPensions([
      ...pensions,
      {
        id: v4(),
        provider,
        policy,
        pensionValue
      }
    ]);

  const removePension = id => setPensions(pensions.filter(pension => pension.id !== id));




  return (
    <PensionContext.Provider value={{ pensions, addPension, removePension, retirementAge, updateRetirementAge }}>
      {children}
    </PensionContext.Provider>
  );
}
