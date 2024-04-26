import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import SlideComponent from '../components/SlideComponent/SlideComponent';

let sliderData = [
  {
    imageUrl: "https://koronapay.com/transfers/europe/static/2583446926e5d48d66f117bd575635fc/d2bb1/1spain_min_188ed83369.jpg",
    title: "Мы объединяем семьи",
    subtitle: "Силой любви и поиска: истории воссоединения"
  },
  {
    imageUrl: "https://migrantumir.com/wp-content/uploads/2019/08/vossoedinenie-semi-v-Chehii.jpg",
    title: "Лучи надежды",
    subtitle: "Семейные переплетения: истории воссоединения"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTiM3nYJCtz6rnwimNKeiSrMK09UYR9ykcA&usqp=CAU",
    title: "Путешествие к дому",
    subtitle: "Воссоединение семей и сердец"
  }
]

const Main = () => {
  return (
    <Box sx={{"width": "100%", "height": "90vh"}}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        {sliderData.map(item => {
          return <SlideComponent title={item.title} subtitle={item.subtitle} imageUrl={item.imageUrl}></SlideComponent>
        })}
        {/* <SwiperSlide>
          <Box
            sx={{
              height: "90vh",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: `url(https://koronapay.com/transfers/europe/static/2583446926e5d48d66f117bd575635fc/d2bb1/1spain_min_188ed83369.jpg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Typography variant="h4" component="h1" sx={{ color: 'white', textAlign: "center"}}>
              Welcome to Our Website
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'white'}}>
              Explore the beauty of nature
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </Box>
  )
}

export default Main