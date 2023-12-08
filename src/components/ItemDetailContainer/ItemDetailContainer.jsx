import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner } from '@chakra-ui/react'

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
    <div>
        {isLoading ?<Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                /> 
                :  <ItemDetail {...product} />
            }
        
    </div>
  )
}

export default ItemDetailContainer
