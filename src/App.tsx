import React, { ChangeEvent, useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Avatar, Box, Button, FormControl, FormLabel, Heading, Image, Input, Stack, Wrap, WrapItem } from '@chakra-ui/react';

type User = {
  id: number
  family_name: string
  given_name: string
  family_name_kana: string
  given_name_kana: string
  email: string
  image: {
    url: string
  }
  created_at: string
  update_at: string
}

function App() {
  const [users, setUsers] = useState<Array<User> | null>(null)

  const getAllUsers = useCallback(() => {
    axios.get('https://localhost:3000/v1/users')
    // axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setUsers(res.data)
    })
    .catch((e) => console.error(e))
  },[])


  const [familyName, setFamilyName] = useState<string>("")
  const [givenName, setGivenName] = useState<string>("")
  const [familyNameKana, setFamilyNameKana] = useState<string>("")
  const [givenNameKana, setGivenNameKana] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [image, setImage] = useState<File|null >(null)

  const onChangeFamilyName = (e:ChangeEvent<HTMLInputElement>) => setFamilyName(e.target.value)
  const onChangeGivenName = (e:ChangeEvent<HTMLInputElement>) => setGivenName(e.target.value)
  const onChangeFamilyNameKana = (e:ChangeEvent<HTMLInputElement>) => setFamilyNameKana(e.target.value)
  const onChangeGivenNameKana = (e:ChangeEvent<HTMLInputElement>) => setGivenNameKana(e.target.value)
  const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const selectImage = (e:any) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }

  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('user[family_name]', familyName)
    formData.append('user[given_name]', givenName)
    formData.append('user[family_name_kana]', familyNameKana)
    formData.append('user[given_name_kana]', givenNameKana)
    formData.append('user[email]', email)
    formData.append('user[image]', image)
    console.log(formData)
    return formData
  }

  const sendFormData = () => {
    const url = 'http://localhost:3000/v1/users'
    const data = createFormData()
    axios.post(url, data)
    .then(() => console.log("success"))
    .catch(e => {
      console.error(e)
    })
  }

  return (
    <div className="App">
      <Heading as="h1" color="teal" textAlign="center">New User</Heading>
      <Box ml={6}>
        <Stack>
          <FormControl>
            <FormLabel>苗字</FormLabel>
            <Input type="text" placeholder="family name" value={familyName} onChange={onChangeFamilyName} />
          </FormControl>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input type="text" placeholder="Given name" value={givenName} onChange={onChangeGivenName} />
          </FormControl>
          <FormControl>
            <FormLabel>苗字カナ</FormLabel>
            <Input type="text" placeholder="family name kana" value={familyNameKana} onChange={onChangeFamilyNameKana} />
          </FormControl>
          <FormControl>
            <FormLabel>名前カナ</FormLabel>
            <Input type="text" placeholder="Given name kana" value={givenNameKana} onChange={onChangeGivenNameKana} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="Email" value={email} onChange={onChangeEmail} />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input type="file" onChange={(e) => selectImage(e)} />
            <Button onClick={sendFormData} bg="teal" color="white" mt={5}>Create</Button>
          </FormControl>
        </Stack>
      </Box>
      <Box textAlign="center">
        <Heading color="gray.600">ALL POSTS</Heading>
      </Box>

        {users?.map((user) => (
          <Box>
            <Image src={user.image.url} />
          </Box>
        ))}



      <Button onClick={getAllUsers}>Get API</Button>
    </div>
  );
}

export default App;
