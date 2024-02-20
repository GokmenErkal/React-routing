import { object, string } from 'yup';

const required_message = "Bu alan zorunludur";

const contactSchema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().email("Geçerli bir email giriniz").required(required_message),
    message: string().min(5, "5 karakterden fazla yazınız").required(required_message),
});

export default contactSchema;