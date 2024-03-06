export const getFormattedDate = (date) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December']
return `${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}

export const getDataMinusDays = (days) => {
    const date = new Date()
    // const
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}