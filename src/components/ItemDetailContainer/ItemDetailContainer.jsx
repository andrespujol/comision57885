import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner, Box, Heading, Flex } from '@chakra-ui/react'
import LoaderComponent from '../LoaderComponent/LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/Firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setIsLoading(true)
        const getProduct = async() => {
          const queryRef = doc(db, 'productos', itemId)

          const response = await getDoc(queryRef)

          const newProduct = {
            id: response.id,
            ...response.data()
          }

          setTimeout(() => {
            setProduct(newProduct)
            setIsLoading(false)
          },500)
        } 
        getProduct()
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
