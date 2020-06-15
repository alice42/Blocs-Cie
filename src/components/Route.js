import React from 'react'
import { timeStampToDate, totalDistance } from '../utils/functions'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Locations from './Locations'

const Route = ({ route }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <React.Fragment>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {route.id}
        </TableCell>
        <TableCell align="right">{timeStampToDate(route.timestamp)}</TableCell>
        <TableCell align="right">{route.activity}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              Path total distance: {totalDistance(route.locations)} (in meters)
              <Locations locations={route.locations} routeId={route.id} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Route.propTypes = {
  route: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        coords: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired
        }).isRequired
      })
    ).isRequired
  }).isRequired
}

export default Route
