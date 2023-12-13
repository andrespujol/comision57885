import { Box } from '@chakra-ui/react';
import { BiCart } from 'react-icons/bi';
import './CartWidget.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react';
const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    return (
        <Box>

            {getQuantity() !== 0 && (
                
                
                <Box width={'40%'} ml={4} display="flex" align="center" justify={'space-around'}>
                <BiCart size={50} color='#fff' />
                <span className='cartQuantity'>{getQuantity()}</span>
                </Box>
                )
            }
        </Box>
    )
}

export default CartWidget
