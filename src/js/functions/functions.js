
export const buildHeight = (value, step, min) =>{
  return value > 0 ? value * step : min
}

export const formatClock = (data, hours) => {
  let begin = 0,
    end = hours;

  const result = data.reduce((acc, current, i, arr) => {
    const resultSlice = arr.slice(begin, end)

    if (resultSlice.length > 0){
      const numTwoHours = resultSlice.reduce((sum, count) => sum += count, 0)
      acc.push(numTwoHours)
      begin += hours
      end += hours
    }
    return acc
  },[])

  return result
}


export const getOrientDeviceClient = () => {
  return document.documentElement.clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait'
}