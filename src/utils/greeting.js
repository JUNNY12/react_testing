export const greeting = () => {
    let timeOfTheDay ;

    const date = new Date()
    const hours = date.getHours()

    switch (true) {
        case hours < 12:
            timeOfTheDay = 'Good morning'
            break;
        case hours >= 12 && hours < 15:
            timeOfTheDay = 'Good afternoon'
            break;
        case hours >= 15 && hours < 19:
            timeOfTheDay = 'Good evening'
            break;
        default:
            timeOfTheDay = 'Good night'
    }

    return timeOfTheDay
}