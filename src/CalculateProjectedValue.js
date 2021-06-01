//under construction - dummy values assume policy holder is 55 and 2% growth

export default function CalculateProjectedValue ({ retirementAge, policyValue }) {
    return ((retirementAge-55)*(policyValue*.02)+policyValue);
};