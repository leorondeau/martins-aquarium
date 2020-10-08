const tipArray = [
    
    {
        tank: "freshwater",
        stepOne: "Fill with freshwater and run with filter for 24 hours",
        stepTwo: "Use bacteria starters",
        stepThree: "Introduce small hardy fish",
        stepFour: "Overtime beneficial bacteria will balance chemistry",
        stepFive: "Slowly introduce new fish"
    },
    {    
        tank: "saltwater",
        stepOne: "Fill with saltwater and run with filter for 24 hours",
        stepTwo: "Monitor salinity, it will increase as freshwater evaporates",
        stepThree: "Add freshwater to reduce salinity",
        stepFour: "6-8 months of before trophic bacteria levels to balance",
        stepFive: "Slowly introduce new fish"
    }

]

export const useTip = () => {
    return tipArray.slice()
}
