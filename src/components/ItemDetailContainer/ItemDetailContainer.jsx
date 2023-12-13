import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner, Box, Heading, Flex } from '@chakra-ui/react'
import LoaderComponent from '../LoaderComponent/LoaderComponent'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setIsLoading(true)
        getProductById(itemId)
            .then((prod) => {
                setProduct(prod)
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setIsLoading(false)})
    }, [itemId])


  return (
    <Box>
      <LoaderComponent loading={isLoading} />
        {!isLoading && 
          <Flex justify={'center'} align={'center'}>     
            <ItemDetail {...product} />
          </Flex>
        }
    </Box>
  )
}

export default ItemDetailContainer
