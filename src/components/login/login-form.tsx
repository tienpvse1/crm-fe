import { Form } from "antd"
import { LoginFormItems } from "./login-form-items";
export const LoginForm = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    
    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <LoginFormItems />
            </Form>
        </>
    )
}