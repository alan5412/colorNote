import {Flex, Image, Box, Text, Heading, Separator,} from "@chakra-ui/react";
import { NumberInputField, NumberInputRoot } from "./ui/number-input";

const Header = ()=>{
    return(
        <Box color={'#fff'}>
            <Flex wrap="wrap" padding={'1rem'} bg={'gray.800'} alignItems={'center'} justifyContent={'space-evenly'} >
                <Box>
                    <Image src="./assets/logo2.jpg" maxWidth={'150px'} borderRadius={'0%'} ></Image>
                </Box>

                <Box textAlign={'center'}>
                    <Heading size={'2xl'}>Hoja de Servicio</Heading>
                    <Text  fontSize='xl' >AJ CAMARENA</Text>
                </Box>

                {/*<Box justifyItems={'center'} >
                    <Heading marginBottom={'.5rem'} size={'2xl'}>No. de Orden</Heading>
                    <NumberInputRoot  variant='filled' size='lg'  min={0} max={100000} maxWidth='100px'>
                        <NumberInputField ></NumberInputField>
                    </NumberInputRoot>
                </Box>*/}
                
            </Flex>
        </Box>
    )
}

export default Header
