import { useContext } from "react"
import { ContextReserva } from "../../../../context/ContextReserva"
import { Typography } from "@mui/material"
import { trasnformDate } from "../../../../utility"
import { Box } from "@/styled-components"

export default function Confirmacion() {

  const {timeSelected, serviceSelected, dateSelected} = useContext(ContextReserva)

  return (
    <Box style={{width: '100%', flexGrow: 1}}>
      	<Typography>
          {`Servicio: ${serviceSelected.name}`}
        </Typography>
        <Typography>
          {`Fecha: ${trasnformDate(dateSelected).eeuu} ${timeSelected}`}
        </Typography>
    </Box>
  )
}