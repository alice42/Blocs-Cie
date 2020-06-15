import React from 'react'
import { timeStampToDate } from '../utils/functions'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const Locations = ({ locations, routeId }) => (
  <Table size="small" aria-label="purchases">
    <TableHead>
      <TableRow>
        <TableCell>Date & Time</TableCell>
        <TableCell align="right">Latitude</TableCell>
        <TableCell align="right">Longitude</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {locations.map((location, index) => (
        <TableRow key={`locations_${routeId}_${index}`}>
          <TableCell>{timeStampToDate(location.timestamp, true)}</TableCell>
          <TableCell align="right">{location.coords.latitude}</TableCell>
          <TableCell align="right">{location.coords.longitude}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

Locations.propTypes = {
  routeId: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      coords: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
      }).isRequired
    })
  ).isRequired
}

export default Locations
