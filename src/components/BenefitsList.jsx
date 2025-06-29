import { benefits } from "../dataBase/benefits"

import { BenefitsItem } from "./BenefitsItem"

export const BenefitsList = () => {
    return (<ul>
        {benefits.map((benefit)=><BenefitsItem benefitData={benefit} />)}
    </ul>)
}