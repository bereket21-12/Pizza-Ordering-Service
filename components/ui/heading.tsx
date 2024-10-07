import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Heading({heading}:{heading:string}) {
    return (
      <Box sx={{ pl: { xs: 2, md: 10 } }}>
        <Typography
          variant="h3"
          align="left"
          sx={{
            mb: 3,
            ml: 2,
            mt: 5,
            color: "gray",
            fontSize: { xs: "1rem", md: "2.5rem" },
          }} // Responsive font size
        >
          {heading}
        </Typography>
      </Box>
    );
}
