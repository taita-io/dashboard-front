import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import React, { useState } from 'react';

function Response({ summaryText, fullText, isOpen }) {
    return <p>{isOpen ? fullText : summaryText}</p>;
  }

export default Response;