import { distanceTo } from 'geolocation-utils'

export const timeStampToDate = (timestamp, withTime) => {
  const date = new Date(timestamp)
  return withTime ? date.toLocaleString() : date.toLocaleDateString()
}

export const totalDistance = locations =>
  locations
    .reduce((acc, location, index) => {
      if (locations.length - 1 > index) {
        const from = {
          lon: location.coords.longitude,
          lat: location.coords.latitude
        }
        const to = {
          lon: locations[index + 1].coords.longitude,
          lat: locations[index + 1].coords.latitude
        }
        return acc + distanceTo(from, to)
      }
      return acc
    }, 0)
    .toFixed(2)
