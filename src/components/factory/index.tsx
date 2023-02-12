import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import DiningIcon from '@mui/icons-material/Dining'
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined'
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DeliveryEnum, OrderEnum } from '../../shared/enum/enum'
import { FilterQuery, UpdateOrderData } from '../../shared/interfaces/order.interface'
import {
    FactoryDialogContentProps,
    FactoryIcon,
    FactoryProps,
    FactoryTimeFormatProps,
} from '../../shared/interfaces/props.interface'
import { AppDispatch } from '../../store'
import { updateState } from '../../store/order-slice'
import { useGetFilterOrderQuery, useUpdateOrderMutation } from '../../store/services-slice'
import { displayError } from '../../utils/displayError'

import {
    CustomAcceptButton,
    CustomDeclineButton,
    LoadingSpinner,
    Transition,
} from '../customcomponents'

export const FactoryButton = ({ deliveryType }: FactoryProps) => {
    // const deliveryReadyHandler = () => {}
    // const pickupReadyHandler = () => {}
    // const readyReadyHandler = () => {}
    const { t } = useTranslation('common')
    switch (deliveryType) {
        case DeliveryEnum.DELIVERY:
            return (
                // delivery
                <>
                    <Typography fontSize="12px" lineHeight="16px" textTransform="none">
                        {t('buttonContent.1')}
                    </Typography>
                </>
            )
        case DeliveryEnum.PICK_UP:
            return (
                // pickup
                <>
                    <Typography fontSize="12px" lineHeight="16px" textTransform="none">
                        {t('buttonContent.2')}
                    </Typography>
                </>
            )
        case DeliveryEnum.EATIN:
            return (
                // eatin
                <>
                    <Typography fontSize="12px" lineHeight="16px" textTransform="none">
                        {t('buttonContent.3')}
                    </Typography>
                </>
            )
        default:
            return (
                <>
                    <Typography fontSize="12px" lineHeight="16px" textTransform="none">
                        {t('buttonContent.3')}
                    </Typography>
                </>
            )
    }
}

export const FactoryIconInfo = ({ orderType }: FactoryIcon) => {
    const { t } = useTranslation('common')
    switch (orderType) {
        case DeliveryEnum.PICK_UP:
            return (
                <Box display="flex">
                    <DiningIcon sx={{ width: '16px', height: '14px', marginX: 1 }} />
                    <Typography fontSize="10px" lineHeight="13px">
                        {t('delivery_type.2')}
                    </Typography>
                </Box>
            )
        case DeliveryEnum.DELIVERY:
            return (
                <Box display="flex">
                    <DeliveryDiningIcon sx={{ width: '16px', height: '14px', marginX: 1 }} />
                    <Typography fontSize="10px" lineHeight="13px">
                        {t('delivery_type.1')}
                    </Typography>
                </Box>
            )
        case DeliveryEnum.EATIN:
            return (
                <Box display="flex">
                    <TakeoutDiningOutlinedIcon sx={{ width: '16px', height: '14px', marginX: 1 }} />
                    <Typography fontSize="10px" lineHeight="13px">
                        {t('delivery_type.3')}
                    </Typography>
                </Box>
            )
        case null:
            return null
        default:
            return (
                <Box display="flex">
                    <TakeoutDiningOutlinedIcon sx={{ width: '16px', height: '14px', marginX: 1 }} />
                    <Typography fontSize="10px" lineHeight="13px">
                        {t('delivery_type.0')}
                    </Typography>
                </Box>
            )
    }
}
const filterData: FilterQuery = {
    query: '{"status":[0,1,2,5,7]}',
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
export const FactoryDialogContent = ({
    open,
    onClose,
    orderId,
    deliveryType,
    orderStatus,
    newPrepTime,
}: FactoryDialogContentProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation('common')
    const dispatch = useDispatch<AppDispatch>()
    const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation()
    const getFilterOrder = useGetFilterOrderQuery(filterData)
    const onUpdateClick = async (dataUpdate: UpdateOrderData) => {
        const updateResponse: any = await updateOrder(dataUpdate)
        getFilterOrder.refetch()
        onClose()
    }

    switch (true) {
        case  orderStatus === OrderEnum.ACCEPTED_BY_BUSINESS:
            return (
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{t('section.dialog.dialogTitle')}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {t('dialogContent.0')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CustomDeclineButton variant="contained" onClick={onClose}>
                            Go Back
                        </CustomDeclineButton>
                        <CustomAcceptButton
                            onClick={() => onUpdateClick({ orderId, newPrepTime:0, orderStatus: 1 })}
                            variant="contained"
                        >
                            Confirm
                        </CustomAcceptButton>
                    </DialogActions>
                    {isUpdating ? (
                        <DialogContent>
                            <LoadingSpinner />
                        </DialogContent>
                    ) : null}
                </Dialog>
            )
        case orderStatus == OrderEnum.PENDING:
            return (
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>Order Confirmation</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Please confirm that you will give the order in {newPrepTime} minutes
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CustomDeclineButton variant="contained" onClick={onClose}>
                            Go Back
                        </CustomDeclineButton>
                        <CustomAcceptButton
                            onClick={() => onUpdateClick({ orderId, newPrepTime, orderStatus: 7 })}
                            variant="contained"
                        >
                            Confirm
                        </CustomAcceptButton>
                    </DialogActions>
                    {isUpdating ? (
                        <DialogContent>
                            <LoadingSpinner />
                        </DialogContent>
                    ) : null}
                </Dialog>
            )
        case orderStatus == OrderEnum.ACCEPTED_BY_BUSINESS &&
            deliveryType == DeliveryEnum.DRIVER_THRU:
            return (
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>Order Confirmation</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Please confirm the order is ready to pick up
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CustomDeclineButton variant="contained" onClick={onClose}>
                            Go Back
                        </CustomDeclineButton>
                        <CustomAcceptButton
                            onClick={() => dispatch(updateState({ orderId }))}
                            variant="contained"
                        >
                            Confirm
                        </CustomAcceptButton>
                    </DialogActions>
                    {isUpdating ? (
                        <DialogContent>
                            <LoadingSpinner />
                        </DialogContent>
                    ) : null}
                </Dialog>
            )
        case null:
            return null
        default:
            return null
    }
}

export const FactoryTimeFormat = ({ minutes, seconds, isDanger }: FactoryTimeFormatProps) => {
    const { t } = useTranslation('common')
    switch (true) {
        case seconds < 10 && !isDanger:
            return (
                <Box
                    sx={{
                        width: '25%',
                        height: '50px',
                        backgroundColor: '#F1F6ED',
                    }}
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    marginRight={2}
                    borderRadius="8px"
                >
                    <Typography
                        sx={{ color: '#74A047' }}
                        fontSize="20px"
                        lineHeight="26px"
                        component={'div'}
                    >
                        {minutes}: 0{seconds}
                    </Typography>
                </Box>
            )

        case seconds < 10 && isDanger:
            return (
                <Box
                    sx={{
                        width: '25%',
                        height: '50px',
                        backgroundColor: '#FDF4F3',
                    }}
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    marginRight={2}
                    borderRadius="8px"
                >
                    <Typography
                        sx={{ color: '#FF5F5F' }}
                        fontSize="20px"
                        lineHeight="26px"
                        component={'div'}
                    >
                        {minutes}: 0{seconds}
                    </Typography>
                </Box>
            )
        case isDanger:
            return (
                <Box
                    sx={{
                        width: '25%',
                        height: '50px',
                        backgroundColor: '#FDF4F3',
                    }}
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    marginRight={2}
                    borderRadius="8px"
                >
                    <Typography
                        sx={{ color: '#FF5F5F' }}
                        fontSize="20px"
                        lineHeight="26px"
                        component={'div'}
                    >
                        {minutes}:{seconds}
                    </Typography>
                </Box>
            )
        case null:
            return null
        default:
            return (
                <Box
                    sx={{
                        width: '25%',
                        height: '50px',
                        backgroundColor: '#F1F6ED',
                    }}
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    marginRight={2}
                    borderRadius="8px"
                >
                    <Typography
                        sx={{ color: '#74A047' }}
                        fontSize="20px"
                        lineHeight="26px"
                        component={'div'}
                    >
                        {minutes}:{seconds}
                    </Typography>
                </Box>
            )
    }
}
