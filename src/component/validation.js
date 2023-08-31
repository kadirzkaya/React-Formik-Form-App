import * as yup from 'yup';

const validation=yup.object().shape({
    name:yup.string().required("Name is a required field."),
    email:yup.string().email("Enter a valid email.").required("Email is a required field."),
    color:yup.string().oneOf(['red','green','blue'],"Pick a color please").required("Color is a required field.")
})

export default validation;