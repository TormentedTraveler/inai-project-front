import { Box, Typography } from '@mui/material'
import { SwiperSlide } from 'swiper/react'

const SlideComponent = ({imageUrl, title, subtitle}) => {
  return (
    <SwiperSlide>
      <Box
        sx={{
          height: "90vh",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Typography variant="h4" component="h1" sx={{ color: 'white', textAlign: "center"}}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'white'}}>
          {subtitle}
        </Typography>
      </Box>
    </SwiperSlide>
  )
}

export default SlideComponent