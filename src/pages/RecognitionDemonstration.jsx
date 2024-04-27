import { Backdrop, Box, Button, CircularProgress, Container, Input, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './AddPerson.css'
import axios from '../axios';
import { colors } from '../helpers/colors';

const RecognitionDemonstration = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    selectedFile: null,
  });

  const handleFileChange = (event) => {
    console.log(event)
    setFormData({
      ...formData,
      selectedFile: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true)
    // Create a FormData object to send the form data
    const formDataToSend = new FormData();
    formDataToSend.append('photo', formData.selectedFile);
  
    try {
      const response = await axios.post('/photo/search/v2', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      let data = response.data
      console.log('Data sent successfully', response.data);

      for (let i=0; i<data.length; i++) {
        console.log(data[i])
        let userDataResponse = await axios.get('/v2/person/'+data[i]?.uuid)
        console.log(userDataResponse.data)
        setUserData(prevData=>[...prevData, 
          {
            name: userDataResponse.data?.name,
            imageUrl: userDataResponse.data?.faces?.[0]?.url
          }])
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
      // Handle Axios error
    } finally {
      setLoading(false)
    }
  };

  return (
    <Container>
      <Typography variant='h4' marginBottom={2} color={colors.blueMain}>
        Демонстрация проекта
      </Typography>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Stack direction={"column"} spacing={3}>
        <Box>
          <label htmlFor="file-upload" className="custom-file-upload">
              Выберите Файл
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          {formData.selectedFile && (
            <Typography variant="body1">
              Выбранный файл {formData.selectedFile.name}
            </Typography>
          )}
        </Box>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} sx={{maxWidth: "250px"}}>
            Распознать человека
        </Button>
      </Stack>

      
    </Container>
  )
}

export default RecognitionDemonstration