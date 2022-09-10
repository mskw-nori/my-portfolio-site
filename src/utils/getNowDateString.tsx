export const getNowDateString = () => {
  const date = new Date()
  const getMonth = date.getMonth()
  const monthlyData = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dateYear = date.getFullYear()
  const dateMonth = monthlyData[getMonth]
  const dateDay = date.getDate()

  const dateSuffix = (() => {
    const isTargetDate = (...targetDate: number[]) => targetDate.includes(dateDay)

    if (isTargetDate(1, 21, 31)) {
      return 'st'
    }
    if (isTargetDate(2, 22)) {
      return 'nd'
    }
    if (isTargetDate(3, 23)) {
      return 'rd'
    }
    return 'th'
  })()

  const today = `${dateYear} ${dateMonth} ${dateDay}${dateSuffix}`

  return today
}
