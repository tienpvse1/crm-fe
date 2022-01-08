import { Button, Checkbox, Form, Input } from 'antd'


export const LoginFormItems = () => {
    return (
        <>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input placeholder="ID người dùng" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    type="password"
                    placeholder="Mật khẩu"
                />
            </Form.Item>
            <Form.Item style={{ marginTop: '-15px' }}>
                <Form.Item name="remember" valuePropName="undefined" noStyle>
                    <Checkbox className="checkbox-login-form-forgot">Ghi nhớ</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Quên mật khẩu?
                </a>
            </Form.Item>

            <Form.Item>
                <Button shape="round" type="primary" htmlType="submit" className="login-form-button">
                    Đăng nhập
                </Button>
            </Form.Item>
        </>
    )
}
