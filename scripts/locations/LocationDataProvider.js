const locations = [

    {
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F06%2F12%2Fcook-islands-01-AUZNZSOPACISLANDSWB20.jpg",
        name: "Cook Islands",
        quote: "Everyone’s happy. If you’re not happy, you’re in the wrong place. Don’t bother coming.",
        author: "Tupou Metutaopu"
    },

    {
        img: "https://s4.thingpic.com/images/Dw/ncCP8uZYJhDkwk1Shh7wPmp4.jpeg",
        name: "NW Hawaiian Islands",
        quote: "...the most important coral reef complex in American waters...was the Northwest Hawaiian Islands",
        author: "Bruce Babbitt"

    },

    {
        img: "https://media.istockphoto.com/photos/tel-aviv-picture-id527167695?k=6&m=527167695&s=612x612&w=0&h=l9QMeNhJtn2kr4BF2LDQea_tDPhEQ1ugGyKQEmulgBk=",
        name: "Tel Aviv, Israel",
        quote: "I love this city",
        author: "Missy Elliot"

    }

]

export const useLocation = () => {
   return locations.slice()
}

