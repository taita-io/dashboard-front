// ComparisonTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Row from './Row';
import Dropdown from './Dropdown';

function ComparisonTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell><Dropdown options={['Viktor Tsvil', 'Yuehan Zeng']} iconUrl=""/></TableCell>
            <TableCell><Dropdown options={['Viktor Tsvil', 'Yuehan Zeng']} iconUrl=""/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row key={index} question={row.question} response1={row.response1} response2={row.response2} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ComparisonTable;
