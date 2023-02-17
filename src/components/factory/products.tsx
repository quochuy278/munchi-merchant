
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    IconButton,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ProductItem } from "../../shared/interfaces/order.interface"
import { OrderProductListProps } from "../../shared/interfaces/props.interface"
import { useState } from 'react'
import styles from './index.module.css'


export const ProductListFactory = ({ productList, orderId }: OrderProductListProps) => {
    const [selectedOrderIDs, setSelectedOrderIDs] = useState<number[]>([])
    const handleOrderPressed = (id: number) => () => {
        setSelectedOrderIDs((prevState) =>
            prevState.includes(id)
                ? // If ID is already selected, remove it
                  prevState.filter((orderId) => orderId !== id)
                : // If ID is not selected, add it
                  [...prevState, id]
        )
    }
    // console.log(ordersData);
    const productLength = productList.length
    switch (true) {
        case productLength <= 5:
            return (
                <Box>
                    {productList?.map((product: ProductItem) => {
                        return (
                            <Box key={product.id} className={styles.product_item_container}>
                                <Box display="flex" width="90%" textAlign="left">
                                    <Typography
                                        fontSize="14px"
                                        lineHeight="16px"
                                        fontWeight={600}
                                    >
                                        {product.quantity}
                                    </Typography>
                                    <Typography
                                        fontSize="14px"
                                        lineHeight="16px"
                                        fontWeight={600}
                                        sx={{ marginX: '20px' }}
                                    >
                                        x
                                    </Typography>

                                    <Typography
                                        fontSize="14px"
                                        lineHeight="16px"
                                        fontWeight={600}
                                        sx={{ marginX: '20px' }}
                                    >
                                        {product.name}
                                    </Typography>
                                </Box>
                                {!product.comment ? null : (
                                    <Card
                                        sx={{
                                            backgroundColor: '#F3F5F7',
                                            width: 'fit-content',
                                            padding: 0.75,
                                            marginTop: '5px',
                                        }}
                                    >
                                        <Typography fontSize="10px" lineHeight="13px">
                                            {product.comment}
                                        </Typography>
                                    </Card>
                                )}
                            </Box>
                        )
                    })}
                </Box>
            )
        case productLength > 5:
            const renderProduct = productList!.slice(0, 2)
            const filterProduct = productList!.filter(
                (item: ProductItem, index: number) => index >= 2
            )

            return (
                <Box className={styles.product_item_container}>
                    <Box
                        display="flex"
                        width="90%"
                        textAlign="left"
                        flexDirection={'column'}
                        justifyContent="center"
                    >
                        {renderProduct.map((product: ProductItem) => {
                            return (
                                <>
                                    <Box
                                        display={'flex'}
                                        key={product.id}
                                        sx={{ padding: '5px' }}
                                        width="100%"
                                    >
                                        <Typography
                                            fontSize="14px"
                                            lineHeight="16px"
                                            fontWeight={600}
                                        >
                                            {product.quantity}
                                        </Typography>
                                        <Typography
                                            fontSize="14px"
                                            lineHeight="16px"
                                            fontWeight={600}
                                            sx={{ marginX: '20px' }}
                                        >
                                            x
                                        </Typography>
                                        <Typography
                                            fontSize="14px"
                                            lineHeight="16px"
                                            fontWeight={600}
                                            sx={{ marginX: '20px' }}
                                        >
                                            {product.name}
                                        </Typography>
                                    </Box>
                                    <Card
                                        sx={{
                                            backgroundColor: '#F3F5F7',
                                            width: 'fit-content',
                                            padding: 0.75,
                                            marginTop: '5px',
                                        }}
                                    >
                                        <Typography fontSize="10px" lineHeight="13px">
                                            {product.comment}
                                        </Typography>
                                    </Card>
                                </>
                            )
                        })}
                        <Accordion
                            key={orderId}
                            expanded={selectedOrderIDs.includes(orderId)}
                            onChange={handleOrderPressed(orderId)}
                            sx={{
                                boxShadow: 'none',
                                '&:before': {
                                    display: 'none',
                                },
                            }}
                            TransitionProps={{ unmountOnExit: true }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                See more
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: 0, paddingY: 2 }}>
                                {filterProduct.map((product: any) => {
                                    return (
                                        <Box
                                            display={'flex'}
                                            key={product.id}
                                            sx={{ padding: '5px' }}
                                            width="100%"
                                        >
                                            <Typography
                                                fontSize="14px"
                                                lineHeight="16px"
                                                fontWeight={600}
                                            >
                                                {product.quantity}
                                            </Typography>
                                            <Typography
                                                fontSize="14px"
                                                lineHeight="16px"
                                                fontWeight={600}
                                                sx={{ marginX: '20px' }}
                                            >
                                                x
                                            </Typography>

                                            <Typography
                                                fontSize="14px"
                                                lineHeight="16px"
                                                fontWeight={600}
                                                sx={{ marginX: '20px', opacity: '0.98px' }}
                                            >
                                                {product.name}
                                            </Typography>
                                        </Box>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            )
        default:
            return (
                <Box>
                    {productList?.map((product: ProductItem) => {
                        return (
                            <Box key={product.id} className={styles.product_item_container}>
                                <Box display="flex" width="90%" textAlign="left">
                                    <Typography
                                        fontSize="14px"
                                        lineHeight="16px"
                                        fontWeight={600}
                                    >
                                        {product.quantity}
                                    </Typography>
                                    <Typography
                                        fontSize="14px"
                                        lineHeight="16px"
                                        fontWeight={600}
                                        sx={{ marginX: '20px' }}
                                    >
                                        x
                                    </Typography>

                                    <Typography
                                        fontSize="14px"
                                        lineHeight="16px"
                                        fontWeight={600}
                                        sx={{ marginX: '20px' }}
                                    >
                                        {product.name}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            )
    }
}