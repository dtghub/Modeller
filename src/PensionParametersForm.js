import { useInput } from "./hooks";

export default function PensionParametersForm ({ onNewParameters = f => f}) {
    const [retirementAge, resetRetirementAge] = useInput(67);
    const [policyValue, resetPolicyValue] = useInput(0);

    const submit = event => {
        event.preventDefault();
        onNewParameters(retirementAge.value, policyValue.value);
        //resetRetirementAge();
        //resetPolicyValue();
        // Use these if implementing an 'add pension' option.
    };

    return ( 
        <form onSubmit={submit}>
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
            <button>Calculate</button>
        </form>    
    );
};

