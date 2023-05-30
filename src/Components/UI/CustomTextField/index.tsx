import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'Black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#Black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'Black',
        },
    },
})
export default CustomTextField