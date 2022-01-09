import { Button, Col, Form, Row, } from 'antd'
import { SignUpFormItems1 } from './signup-form-items-1';
import { SignUpFormItems2 } from './signup-form-items-2';

export const SignUpForm = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    
    return (
        <>
            <Form
                name="register"
                className='signup-form'
                onFinish={onFinish}
                initialValues={{
                    prefix: '86'
                }}
            >
                <Row gutter={[32, 8]}>
                    <Col span={12}>
                        <SignUpFormItems1 />
                    </Col>
                    <Col span={12}>
                        <SignUpFormItems2 />
                    </Col>
                    <Col style={{textAlign: 'center'}} span={24}>
                        <Form.Item>
                            <Button shape="round" type="primary" htmlType="submit" className="signup-form-button">
                                Đăng Ký
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
