import { Box, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import MainContent from '../../components/container/MainContent'
import OrderCardList from '../../components/order/list'
import OrderTitle from '../../components/order/title'
import { AppDispatch, RootState, useTypedSelector } from '../../store'
import styles from './index.module.css'
import { selectOrders, selectStatus } from '../../store/order-slice'
import { useTranslation } from 'react-i18next'
import { OrderEnum } from '../../shared/enum/enum'
import { FilterQuery, Order } from '../../shared/interfaces/order.interface'
import { logOut, useGetFilterOrderQuery } from '../../store/services-slice'
import OrderCompleteList from '../../components/order/complete/list'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { preferencesCheck } from '../../utils/preferencesCheck'
import { Navigate } from 'react-router-dom'
const MainPage = ({loginData}:any) => {
    const filterData: FilterQuery = {
        publicBusinessId: loginData.publicBusinessId,
        query: null,
        paramsQuery: [
            'id',
            'business_id',
            'prepared_in',
            'customer_id',
            'status',
            'delivery_type',
            'delivery_datetime',
            'products',
            'summary',
            'customer',
            'created_at',
        ].join(','),
    }
    const { data, isError, isLoading, error } = useGetFilterOrderQuery(filterData, {
        refetchOnReconnect: true,
    })
    console.log(data)
    const { loading } = useSelector((state: RootState) => state.order)
    const dispatch = useDispatch<AppDispatch>()
    const { t } = useTranslation('common')
    if (error || isError) {
        setTimeout(() => {
            dispatch(logOut())
        }, 1000)
    }

    const pendingOrders = data?.filter((order: Order) => order.status === OrderEnum.PENDING)

    const acceptedOrders = data?.filter(
        (order: Order) => order.status === OrderEnum.ACCEPTED_BY_BUSINESS
    )
    const readyOrders = data?.filter((order: Order) => {
        return order.status === 11 || order.status === 1
    })

    return (
        <MainContent>
            {isLoading || loading ? (
                <Box
                    sx={{ height: 'calc(100vh)' }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(14, 1fr)"
                    gap={2}
                    sx={{ width: '100%', padding: '10px' }}
                >
                    <Box gridColumn="span 6" className={styles.section__container}>
                        <OrderTitle
                            orderTitle={t('section.sectiontitle.0')}
                            orderQuantity={pendingOrders.length}
                        />
                        <OrderCardList ordersData={pendingOrders} />
                    </Box>

                    {/* Accepted */}

                    <Box gridColumn="span 6" className={styles.section__container}>
                        <OrderTitle
                            orderTitle={t('section.sectiontitle.1')}
                            orderQuantity={acceptedOrders.length}
                        />
                        <OrderCardList ordersData={acceptedOrders} />
                    </Box>
                    {/* Ready */}

                    <Box gridColumn="span 2" className={styles.section__container}>
                        <OrderTitle
                            orderTitle={t('section.sectiontitle.2')}
                            orderQuantity={readyOrders.length}
                        />
                        <OrderCompleteList ordersData={readyOrders} />
                    </Box>
                </Box>
            )}
            {/* Pending */}
        </MainContent>
    )
}

export default MainPage
