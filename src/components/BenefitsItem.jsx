export const BenefitsItem = ({benefitData}) =>{
    return (<li>
            <img src={benefitData.photo} />
            <h2>{benefitData.title}</h2>
        </li>)
        
}