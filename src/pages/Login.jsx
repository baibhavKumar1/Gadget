
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { Button, Input, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, VStack, Image, Box, useDisclosure, InputGroup, InputLeftElement, InputRightElement, Text, } from '@chakra-ui/react';
import { BiSolidLockAlt } from "react-icons/bi";
import { PiEyeBold, PiEyeClosedBold, } from 'react-icons/pi';

import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../redux/AuthReducer/action';
import { SignupModal } from './Signup';

const LoginMenu = () => {
    const [SignOpen, setSignOpen] = useState(false);
    function SignClose() {
        setSignOpen(!SignOpen);
    }
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)
    const { onOpen, onClose, isOpen } = useDisclosure()
    const [email, setUsername] = useState("");
    const dispatch = useDispatch();
    const [pass, setPassword] = useState("");
    
    let {isAuth,name} = useSelector((store) => store.AuthReducer);
    
    
    
    const handleSubmit=()=>{
        console.log(email,pass);
        dispatch(Login({email,pass}));
        onClose()
        setPassword('');
        setUsername('')
    }

    return (
        <VStack align="end">
            <Popover isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose} placement="bottom-end">
                <PopoverTrigger>
                    <Button as="div" border="none" variant="link">
                        <Image
                            src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
                            alt="User Icon"
                        />
                    </Button>
                </PopoverTrigger>
                {isAuth ?
                    <PopoverContent w={"100%"} border={"none"} m="5px" p="10px" borderRadius={"15px"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader border="none" fontWeight={"bold"} color="#2b3954"
                            fontSize="22">Welcome,<Text textTransform={"capitalize"}>{name}</Text>
                        </PopoverHeader>
                        <PopoverBody >
                            <Button colorScheme="white" fontSize="16" w="100%" fontWeight="400" bg="#2b3954" _hover={{ bgColor: "#e89f22" }} letterSpacing={"1px"} onClick={()=>{localStorage.removeItem('token')}}>LOGOUT
                            </Button>
                        </PopoverBody>
                    </PopoverContent>
                    :
                    <PopoverContent m="5px" p="10px" borderRadius={"15px"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader border="none" fontWeight={"bold"} color="#2b3954" fontSize="25">Login</PopoverHeader>
                        <PopoverBody>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' fontSize={"22px"} className='justify-center text-center items-center'>
                                    <MdEmail />
                                </InputLeftElement>
                                <Input value={email} type='email' onChange={(e) => setUsername(e.target.value)} placeholder="User Email" marginBottom={2} />
                            </InputGroup>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none' fontSize={"22px"} className='justify-center text-center items-center'>
                                    <BiSolidLockAlt />
                                </InputLeftElement>
                                <Input value={pass} onChange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} placeholder="Password" marginBottom={2}/>
                                <InputRightElement>
                                    {!show ? <PiEyeClosedBold fontSize={"18px"} className='justify-center text-center items-center' onClick={handleClick} /> : <PiEyeBold fontSize={"18px"}className='justify-center text-center items-center' onClick={handleClick} />}
                                </InputRightElement>
                            </InputGroup>

                            <Button colorScheme="white" fontSize="16" w="100%" fontWeight="400" bg="#2b3954" _hover={{ bgColor: "#e89f22" }} letterSpacing={"1px"} onClick={handleSubmit}>
                                LOGIN
                            </Button>

                            <Box m={"10px 35%"} mb={"0"} alignItems={"center"} className='justify-center' w={"100%"}>
                                <Button color="#2b3954" fontSize="sm" variant={"link"} onClick={() => { setSignOpen(!SignOpen) }} textDecoration="none">
                                    New User ?
                                </Button>
                                {SignOpen && <SignupModal
                                    onOpens={SignOpen}
                                    LetClose={SignClose} />}
                            </Box>

                        </PopoverBody>
                    </PopoverContent>}
            </Popover>
        </VStack>
    );
};

export default LoginMenu;
