import { Box, Button, Flex } from "@chakra-ui/react";

function Home () {
    return (
        <Box>
            <Flex 
                justifyContent="center" 
                alignItems="center" 
                h="20vh" 
                bgColor="teal"
            >
                My Home
            </Flex>
            <Button colorScheme='blue' variant='solid'>Submit</Button>
        </Box>
    )
}

export default Home;