import React from 'react'
import data from '../data/data.json'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Route from '../components/Route'

const App = () => (
  <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Path ID</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Activity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.routes.map(route => (
          <Route key={`route_${route.id}`} route={route} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default App
