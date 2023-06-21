// Row.js
import React, { useState } from 'react';
import { TableCell, TableRow, Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Question from './Question';
import Response from './Response';

function Row({ question, response1, response2 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setIsOpen(!isOpen)} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} // Add this line
>
            <ExpandMoreIcon />
          </IconButton>
        </TableCell>
        <TableCell>
          <Question summaryText={question.summaryText} fullText={question.fullText} isOpen={isOpen} />
        </TableCell>
        <TableCell>
          <Response summaryText={response1.summaryText} fullText={response1.fullText} isOpen={isOpen} />
        </TableCell>
        <TableCell>
          <Response summaryText={response2.summaryText} fullText={response2.fullText} isOpen={isOpen} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;
