import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base"
import { useState } from "react";

import Login from "./login";

const Signup = ({navigation}) => {
    const [Email,setemail]=useState('')
    const [password,setPassword]=useState('')
    const [pass,setPass]=useState('')
  
    const checkTextInput= () => {
        if(!Email.trim()){
            alert('please Enter Email')
           return
        }
        if(!password.trim()){
            alert('please Enter Password')
           return
        }
        if(pass!==password.trim()){
          alert('please same Password')
         return
      }
        alert('Success')
        return
    } 

  return <NativeBaseProvider>    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
                onChangeText = {(Email)=>{setemail(Email)}}
              />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password"
                  onChangeText = {(password)=>{setPassword(password)}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" 
                  onChangeText = {(pass)=>{setPass(pass)}}
              />
          </FormControl>
          <Button mt="2" colorScheme="green"  
          onPress={checkTextInput}>
                check
          </Button>
          <Button mt="2" colorScheme="indigo"  
          onPress={()=> navigation.navigate('Login')}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>;
    </NativeBaseProvider>
};

    export default  Signup 
