/* eslint-disable react/prop-types */
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function AccordionShow({ title, data, bgColor, className }) {
  return (
    <Accordion
      className={`${className}`}
      defaultExpanded
      sx={{
        boxShadow: "none !important",
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: "#FAFAFA",
            }}
          />
        }
        aria-controls="panel1-content"
        id="panel1-header"
        className="cardInfo"
        sx={{
          backgroundColor: `${bgColor}`,
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;",
        }}
      >
        {title}
      </AccordionSummary>

      <AccordionDetails
        className="cardDescription"
        sx={{ boxShadow: "none !important" }}
      >
        {data?.map((item, index) => (
          <Accordion className={`${className}`} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#090909" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="cardInfo"
              sx={{
                backgroundColor: `${item.bgColor}`,
                color: "#090909 !important",
                fontWeight: "300 !important",
              }}
            >
              {item.title}
            </AccordionSummary>

            <AccordionDetails className="cardDescription">
              {item.description}
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
