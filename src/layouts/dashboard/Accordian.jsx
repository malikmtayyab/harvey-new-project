/* eslint-disable */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavAccordion({accordionItems}) {
  console.log(accordionItems)
  return (
    <div style={{
      margin:'4px'
    }}>
      {
        accordionItems.heading?
        <h3>{accordionItems.heading}</h3>
        :''
      }
   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         {accordionItems.title}
     
        </AccordionSummary>
        {
          accordionItems &&
         accordionItems.dropdown.map((item)=>
         {

        return   <AccordionDetails>
       <Link 
       
       style={{
        textDecoration:'none',
        marginLeft:'12px',
        fontSize:'14px',
        color:'black'
       }}
       to={item.path}>{item.title}</Link>
        </AccordionDetails>
    })
   }
      </Accordion>
      
  
    </div>
  );
}
