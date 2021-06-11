import { useInput } from "./hooks";
import { usePensions } from "./PensionProvider";

export default function PensionParametersForm() {
    const pensionValue = 0;
    const providerName = "";
    const policyNumber = "";
    const [retAge, resetRetirementAge] = useInput(67);
    const { addPension } = usePensions();
    const { updateRetirementAge } = usePensions();
    

    const submit = e => {
        e.preventDefault();
        addPension(providerName.value, policyNumber.value, pensionValue.value);
    };

    const submitNewAge = e => {
        e.preventDefault();
        updateRetirementAge(retAge.value);
    };

    return ( 
        <section>
        <form onSubmit={submitNewAge}>
        <input
        className="tbd"
        {...retAge}
        type="text" 
        placeholder="Age"
        required
        />
        <button>Update retirement Age</button>
      </form>
        <form onSubmit={submit}>
            <h4>Use this button if you have other pensions you would like to include in the projection:
            <button>Add pension</button>
            </h4>
        </form>  
        </section>  
    );
};

