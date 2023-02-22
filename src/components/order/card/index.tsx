import { Box, IconButton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { Order } from '../../../shared/interfaces/order.interface'
import { OrderDataProps } from '../../../shared/interfaces/props.interface'
import { FactoryIconInfo } from '../../factory'
import { ProductListFactory } from '../../factory/products'
import OrderFooter from './footer'
import styles from './index.module.css'
import moment from 'moment'

export default function OrderCard({ order }: any) {
    const { t } = useTranslation('common')
    const navigate = useNavigate()
    const time = moment(order.createdAt).format('HH:mm:ss')
    const time2 = moment(order.createdAt)
    const now = moment()
    return (
        <Box className={styles.main__card__container} key={order.id}>
            <Link to={`/${order.id}`} style={{textDecoration:'none', color:"black"}} >
            <Box component="form">
                <Box
                    display="flex"
                    sx={{ width: '100%' }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ width: '40%' }}
                    >
                        <Typography
                            lineHeight="29px"
                            fontSize="22px"
                            fontWeight={600}
                            textAlign="left"
                        >
                            # {order.id}
                        </Typography>
                        <div className={styles.divider}></div>
                        <Typography lineHeight="18px" fontSize="14px" fontWeight={600}>
                            {order.customer.name}
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton
                            sx={{
                                borderRadius: '3px',
                                border: '1px solid #F3F5F7',
                                opacity: 1,
                            }}
                        >
                            <FactoryIconInfo orderType={order.deliveryType} />
                        </IconButton>
                    </Box>
                </Box>
                <Typography
                    textAlign="left"
                    sx={{ color: '#707070' }}
                    fontSize="8px"
                    lineHeight="10px"
                >
                    {t('timeStamp.day.0')} at {time}
                </Typography>
                <Box className={styles.card__item__container}>
                    <ProductListFactory productList={order.products} orderId={order.id} />
                </Box>
            </Box>
            <OrderFooter
                orderStatus={order.status}
                orderId={order.id}
                deliveryType={order.deliveryType}
                prepTime={order.preparedIn}
            />
            </Link>
        </Box>
    )
}
