const fishCollection = [
    {
        type: "Peppermint Anglefish",
        name: "Mint",
        species: "Centropyge boylei",
        length: 3,
        diet: "algae",
        location: "Cook Islands",
        img: "https://fishkeepingforever.com/wp-content/uploads/2019/05/peppermint-angelfish-1024x670.jpg"

    },
    {
        type: "Masked Anglefish",
        name: "The Crook",
        species: "Genicanthus personatus",
        length: 9,
        diet: "algae",
        location: "NW Hawaiian Islands",
        img: "https://fishkeepingforever.com/wp-content/uploads/2019/05/masked-angelfish.png"
    },

{
        type: "Clownfish",
        name: "Cookie",
        species: "Premnas biaculeatus",
        length: 3,
        diet: "zooplankton",
        location: "Tel Aviv, Israel",
        img: "https://reefbuilders.com/wp-content/blogs.dir/1/files/ngg_featured/peace-keeper-maroon-clownfish-4.jpg"
    },
    {
        type: "Wolf Ciudid",
        name: "Killer",
        species: "Parachromis dovii",
        length: 28,
        diet: "omnivore",
        location: "Costa Rica",
        img: "https://nitrocdn.com/ErXqfwuJXOyatMMstrPsxoGzmRYqqSef/assets/static/source/rev-9e7b689/wp-content/uploads/Wolf_Cichlid_large.jpg"

    },
    {
        type: "Vampire Fish",
        name: "Vlad",
        species: "Payara",
        length: 13,
        diet: "live fish",
        location: "Amazon basin",
        img: "https://nitrocdn.com/ErXqfwuJXOyatMMstrPsxoGzmRYqqSef/assets/static/source/rev-9e7b689/wp-content/uploads/Vampire_Tetra_large-1.jpg"
    },
    {
        type: "Koi Girl",
        name: "Erin",
        species: "Cyprinus rubrofuscus",
        length: 36,
        diet: "plants, bugs, fish",
        location: "Matsuda, Japan",
        img: "https://images.unsplash.com/photo-1517361265-3bd77c6f1689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },

    {
        type: "Koi Boi",
        name: "Aaron",
        species: "Cyprinus rubrofuscus",
        length: 35,
        diet: "plants, bugs, fish",
        location: "Matsuda, Japan",
        img: "https://images.unsplash.com/photo-1517361265-3bd77c6f1689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    {
        type: "Vampire Fish",
        name: "Dracula",
        species: "Payara",
        length: 25,
        diet: "live fish",
        location: "Amazon basin",
        img: "https://nitrocdn.com/ErXqfwuJXOyatMMstrPsxoGzmRYqqSef/assets/static/source/rev-9e7b689/wp-content/uploads/Vampire_Tetra_large-1.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish

}

export const soldierFish = () => {
    const soldierFish = []
    
    for(const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length %3 !== 0) {
            soldierFish.push(fish)
        }
        
    }
    return soldierFish
}

export const regularFish = () => {
    const regularFish=[] 

    for(const fish of fishCollection) {
        if (fish.length % 5 !==0 && fish.length % 3 !==0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}