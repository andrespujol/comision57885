import { Box, Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import LoaderComponent from '../LoaderComponent/LoaderComponent'
import { collection, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../config/Firebase'
const ItemListContainer = ({title}) => {
    const [ data, setData ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()
    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {

            const queryRef = !categoryId ? collection(db, 'productos') : 
            query(collection(db, 'productos'), where('categoria', '==', categoryId))
            
            const response = await getDocs(queryRef)

            const products = response.docs.map((doc) => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                }
                return newProduct
            })
            setTimeout(() => {
                setData(products)
                setIsLoading(false)
            },1000)
        }
        getData()
    }, [categoryId])



    return (
        <Flex direction={'column'} justify={'center'}  align={'center'} m={4} > 
            <LoaderComponent loading={isLoading} />
            {!isLoading && 
            <>    
                <Heading >{title}</Heading>
                <Heading>Categoría: {categoryId && categoryId}</Heading>
                <ItemList data={data}  />
            </>}
        </Flex>
    )
}

export default ItemListContainer
