import { distanceTo } from 'geolocation-utils'

export const timeStampToDate = timestamp => {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

export const totalDistance = locations => {
  let dist = 0
  locations.forEach((location, index) => {
    if (locations.length - 1 > index) {
      const from = {
        lon: location.coords.longitude,
        lat: location.coords.latitude
      }
      const to = {
        lon: locations[index + 1].coords.longitude,
        lat: locations[index + 1].coords.latitude
      }
      dist += distanceTo(from, to)
    }
  })
  return dist.toFixed(2)
}
