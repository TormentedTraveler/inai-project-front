import { Box, Typography } from '@mui/material'
// import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper' 
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle'
import {colors} from './../helpers/colors'
import { green } from '@mui/material/colors';

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

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2000, // delay in milliseconds
    disableOnInteraction: false, // continue autoplay even if the user interacts with the swiper
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const Main = () => {
  return (
    <Box sx={{"width": "100%", "height": "90vh"}}>
      <Swiper
        // spaceBetween={0}
        // slidesPerView={1}
        // navigation 
        // autoplay={{delay: 30}}
        {...swiperParams}
      >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: "90vh",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'  
                  
                }}
              >
                <Box sx={{ opacity: "0.8", backgroundColor: colors.grayGray, margin: "10px"}}>
                  <Typography variant="h3" component="h1" sx={{ color: colors.brown, textAlign: "center", fontStyle: "bold"}}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'white', textAlign: "center"}}>
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  )
}

export default Main