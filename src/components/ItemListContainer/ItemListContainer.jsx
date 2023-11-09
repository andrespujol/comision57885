import { Box, Flex, Heading } from '@chakra-ui/react'
const ItemListContainer = ({ title }) => {
    return (
        <Flex justify={'center'} align={'center'} m={4}> 
            <Box>
                <Heading font>{title}</Heading>
            </Box>
        </Flex>
    )
}

export default ItemListContainer
