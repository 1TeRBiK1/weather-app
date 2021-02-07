export function getDayOfWeek(date){
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const day = new Date(date)

    return DAYS[day.getDay()]
}

export function getHoursAndMin(date){

    const day = new Date(date*1000)

    return `${day.getHours()}:${day.getMinutes()}`

}