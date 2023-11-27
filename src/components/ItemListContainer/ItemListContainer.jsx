import { Box, Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({ title }) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        getProducts()
            .then((prod) => {
                setData(prod)
            })
            .catch((err) => console.log(err))
    }, [])

    

    return (
        <Flex direction={'column'} justify={'center'}  align={'center'} m={4} > 
            <Box>
                <Heading >{title}</Heading>
            </Box>
            <ItemList data={data} />
        </Flex>
    )
}

export default ItemListContainer
