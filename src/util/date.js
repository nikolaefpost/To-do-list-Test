export const getFormattedDate = (value) => {
    const date = typeof value === 'string' ? new Date(value) : value
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December']
return `${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}

export const getToday = () => {
    const date = new Date()
  return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
}

export const getIdDate = () => Date.now()
