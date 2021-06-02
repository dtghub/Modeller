//under construction - dummy values assume policy holder is 55 and 2% growth not cumulative!

export default function CalculateProjectedValue ({ retirementAge, pensionValue }) {
    const incorrectValuation = (retirementAge-55)*(pensionValue*0.02)+ +pensionValue;
    return (incorrectValuation);
};