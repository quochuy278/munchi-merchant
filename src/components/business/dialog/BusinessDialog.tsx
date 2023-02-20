import { BusinessData } from '../../../shared/interfaces/business.interface'
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@mui/material'
import { CustomAcceptButton, CustomDeclineButton, Transition } from '../../customcomponents'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { useDispatch } from 'react-redux'
// import { setPreferenceBusiness } from '../../../store/business-slice'
import { useNavigate } from 'react-router-dom'
import {
    setPreferenceBusiness,
    setSelectBusiness,
    setSelectBusinessClose,
} from '../../../store/business-slice'
import { Preferences } from '@capacitor/preferences'
import { LoginState } from '../../../shared/interfaces/user.interface'
import { displayError } from '../../../utils/displayError'
const BusinessDialog = ({ loginState }: any) => {
    const [open, setOpen] = useState(true)
    const [authState, setAuthState] = useState<LoginState>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { businessData, isLocked } = useSelector((state: RootState) => state.business)
    if (isLocked) {
        console.log('business Data is ', businessData, 'business is locked')
    }

    const dialogHandler = () => {
        dispatch(setSelectBusinessClose(isLocked))
        setOpen(false)
    }
    const onSelectBusiness = async () => {
        dispatch(
            setPreferenceBusiness({
                publicUserId: loginState.publicUserId,
                verifyToken: loginState.verifyToken,
                isAuthenticated: true,
                publicBusinessId: businessData[0].publicId,
                businessName: businessData[0].name,
            })
        )
        setOpen(false)
    }
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    You are choosing {businessData[0]?.name}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CustomDeclineButton variant="contained" onClick={dialogHandler}>
                    Go Back
                </CustomDeclineButton>
                <CustomAcceptButton onClick={onSelectBusiness} variant="contained">
                    Confirm
                </CustomAcceptButton>
            </DialogActions>
        </Dialog>
    )
}
export default BusinessDialog
