import { useInput } from "./hooks";
import { usePensions } from "./PensionProvider";

export default function PensionParametersForm() {
    const [retirementAge, resetRetirementAge] = useInput(67);
    const [policyValue, resetPolicyValue] = useInput(0);
    const [providerName, resetProviderName] = useInput("Provider Name");
    const [policyNumber, resetPolicyNumber] = useInput("Policy 123456");
    const { addPension } = usePensions();

    const submit = e => {
        e.preventDefault();
        addPension(providerName.value, policyNumber.value, retirementAge.value, policyValue.value);
        resetRetirementAge();
        resetPolicyValue();
    };

    return ( 
        <form onSubmit={submit}>

            <input
            {...providerName}
            type="text"
            placeholder="Pension company (e.g. Scottish Widows)"
            required
            />
            <input
            {...policyNumber}
            type="text"
            placeholder="Policy Reference (e.g. TK1234578)"
            required
            />
            <input
            {...retirementAge}
            type="text"
            placeholder="Retirement Age (e.g. 67)"
            required
            />
            <input
            {...policyValue}
            type="text"
            placeholder="Value of your policy."
            required
            />
            <button>Add pension</button>
        </form>    
    );
};

