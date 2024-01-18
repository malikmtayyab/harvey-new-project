/* eslint-disable */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { usePathname } from 'src/routes/hooks';
import { alpha } from '@mui/material/styles';


export default function NavAccordion({accordionItems}) {
  const pathname = usePathname();

  
  return (
    <div style={{
      margin:'4px',
      
    }}>
      {
        accordionItems.heading?
        <h3>{accordionItems.heading}</h3>
        :''
      }
   <Accordion sx={{
    background:'transparent'
   }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"

        >
<div style={{
  display:'flex',
  alignContent:'center',
  alignItems:'center',

}}>

          <div style={{
            marginRight:8,
            paddingTop:5
          }}>
           {accordionItems.icon}
          </div>
         <div>

         {accordionItems.title}
</div>
          </div>
     
        </AccordionSummary>
        {
          accordionItems &&
         accordionItems.dropdown.map((item)=>
         {

        return   <AccordionDetails
        
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          ...(item.path === pathname && {
            color: 'primary.main',
            fontWeight: 'fontWeightSemiBold',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
            },
          }),
         
        }}
        >
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
