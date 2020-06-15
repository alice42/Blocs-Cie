import React from 'react'

import data from '../data/data.json'

const TimeStampToDate = timestamp => {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}

const App = () => {
  const [displayState, setDisplayState] = React.useState('')
  const handleInputChange = () => {
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
            key={index}
          >
            <span> route ID : {route.id}</span>
            <span> route Time stamp: {TimeStampToDate(route.timestamp)}</span>
            <span> route Activity: {route.activity}</span>
            <span> route Locations: </span>
            <button onClick={() => handleInputChange()}>
              display location
            </button>
            {displayState && (
              <div>
                <span>total distance: (in meters)</span>

                {route.locations.map((location, index) => {
                  return (
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      key={index}
                    >
                      <span>
                        location TimeStamp :{' '}
                        {TimeStampToDate(location.timestamp)}
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
