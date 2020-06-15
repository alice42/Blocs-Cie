import React from 'react'
import data from '../data/data.json'
import { timeStampToDate, totalDistance } from '../utils/functions'

const App = () => {
  const [displayState, setDisplayState] = React.useState(false)
  const handleDisplay = () => {
    setDisplayState(!displayState)
  }
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      {data.routes.map((route, index) => {
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            key={`route_${index}`}
            onClick={() => handleDisplay()}
          >
            <span> Path ID : {route.id}</span>
            <span> Path Time stamp: {timeStampToDate(route.timestamp)}</span>
            <span> Path Activity: {route.activity}</span>
            <span> Path Locations: </span>

            {displayState && (
              <div>
                <span>
                  Path total distance: {totalDistance(route.locations)} (in
                  meters)
                </span>

                {route.locations.map((location, index) => {
                  return (
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      key={`locations_${index}`}
                    >
                      <span>
                        location TimeStamp :
                        {timeStampToDate(location.timestamp)}
                      </span>
                      <span>
                        location coords LONG :{location.coords.longitude}
                      </span>
                      <span>
                        location coords LAT : {location.coords.latitude}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default App
