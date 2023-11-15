import React from "react";
import PropTypes from "prop-types";
import { preguntasAyuda } from "../../data/data";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {preguntasAyuda.map((pregunta) => (
        <div key={pregunta.id}>
          <Accordion
            open={open === pregunta.id}
            icon={<Icon id={pregunta.id} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(pregunta.id)}>
              {pregunta.id}-{pregunta.pregunta}
            </AccordionHeader>
            <AccordionBody>{pregunta.respuesta}</AccordionBody>
          </Accordion>
        </div>
      ))}
    </>
  );
}

Icon.propTypes = {
  id: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};
