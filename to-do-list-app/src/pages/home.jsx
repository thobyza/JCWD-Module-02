import { Box, Button, Flex, Input } from "@chakra-ui/react";

function Home () {
    return (
        <Flex justifyContent="center">
            <Box w='40%' p={4} bgColor="#FFFAF0" border='2px' borderColor='tomato' borderRadius="10px">
                <Flex
                    justifyContent="center"
                    alignItems="center"  
                    mb="5px"
                    fontSize='2xl'
                    color='tomato'
                    fontWeight='bold'
                >
                    To-Do List 
                </Flex>
                <Flex>
                    <Input placeholder='add your task here' me="2vw"/>
                    <Button bg='tomato' color='white'>Add</Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Home;