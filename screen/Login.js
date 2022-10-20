import * as React from "react";
import { SafeAreaView } from "react-native";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,Image } from "native-base";
import Signup from "./Signup";
import HomeScreen from "./HomeScreen";
const Login = ({ navigation }) => {

    return (
        <NativeBaseProvider>    
    <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Welcome
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                    <Link _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                    }} alignSelf="flex-end" mt="1">
                        Forget Password?
                    </Link>
                </FormControl>
                <Button onPress={() => navigation.navigate('Home')}>
                        Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        {" "}
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('Sign up')}
                    >
                        Sign up
                    </Button>

                </HStack>
            </VStack>
        </Box>
    </Center>

    </NativeBaseProvider>
    )
};

export default Login 
