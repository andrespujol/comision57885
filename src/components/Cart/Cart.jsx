import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box,
    TableContainer,
    Button,
    Heading,
    Flex,
    Link as ChakraLink
  } from '@chakra-ui/react'
import { TiDeleteOutline } from "react-icons/ti";
import { Link as ReactRouterLink} from 'react-router-dom'

const Cart = () => {
    const { cart, getTotal,removeItem, clearCart } = useContext(CartContext)
    console.log('Cart: ', cart)

    if(cart.length === 0) {
        return (
            <Flex justify={'center'} align={'center'} direction={'column'} mt={10}>
                <Heading>Todavía no agregaste productos</Heading>
                <ChakraLink as={ReactRouterLink} fontSize={'2rem'} to='/'>Ver productos</ChakraLink>
            </Flex>
        )
    }else{

        return (
          <>
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <Thead>
                  <Tr>
                    <Th>Producto</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio unitario</Th>
                    <Th>Subtotal</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                {
                  cart.map((prod) => (
                      <Tbody key={prod.id}>
                        <Tr>
                            <Td>{prod.nombre}</Td>
                            <Td>{prod.quantity}</Td>
                            <Td>{prod.precio}</Td>
                            <Td>{prod.quantity * prod.precio}</Td>
                            <Td><Button onClick={() => removeItem(prod.id)}><TiDeleteOutline style={{fontSize:'2rem'}} /></Button></Td>
                        </Tr>
                      </Tbody>
                ))
                }
              </Table>
            </TableContainer>
            <Flex justify={'space-around'} align={'center'} width={'70%'} mx="auto" mt={5}>
              <Heading>Precio total: ${getTotal()}</Heading>
              <Button onClick={()=>clearCart()}>Vaciar carrito</Button>
              <ChakraLink as={ReactRouterLink} to={'/checkout'}>Finalizar la compra</ChakraLink>

            </Flex>
          </>
  )
}
}

export default Cart
