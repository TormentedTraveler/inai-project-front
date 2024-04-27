import { Backdrop, Box, Button, CircularProgress, Container, Input, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './AddPerson.css'
import axios from '../axios';
import { colors } from './../helpers/colors';

const AddPerson = () => {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    clothes: '',
    uniqueData: '',
    selectedFile: null,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

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
    formDataToSend.append('name', formData.name + formData.surname);
    formDataToSend.append('photos', formData.selectedFile);
  
    try {
      const response = await axios.post('/v2/person', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log('Data sent successfully', response.data);
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
        Добавить человека 
      </Typography>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Stack direction={"column"} spacing={3}>
        <TextField id="name" label="Имя" variant="outlined" value={formData.name} onChange={handleChange}/>
        <TextField id="surname" label="Фамилия" variant="outlined" value={formData.surname} onChange={handleChange}/>
        <TextField id="clothes" label="Одежда" multiline rows={1} value={formData.clothes}  onChange={handleChange}/>
        <TextField id="uniqueData" label="Признаки" multiline rows={1} value={formData.uniqueData} onChange={handleChange}/>
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
            Добавить Человека
        </Button>
      </Stack>
    </Container>
  )
}

export default AddPerson