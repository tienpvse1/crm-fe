import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Col, Row, Button } from "antd"
import { ButtonFilter } from "../button/button-filter"

export const ContactHeader = () => {
    return (
        <div style={{ padding: '10px' }}>
            <span style={{ fontSize: '27px', color: 'rgba(0,0,0,0.7)', fontWeight: '700', padding: '10px' }}>Contact</span>
            <div>
                <Row style={{ alignItems: 'center' }}>
                    <Col xs={3} sm={5} md={7} lg={9} xl={12} style={{ marginLeft: '10px', marginTop: '20px' }}>
                        <Input size="small" placeholder="Search for id, name or phone number" style={{ borderRadius: '10px' }}
                            suffix={<Button shape="circle"
                                icon={<SearchOutlined />}
                                style={{ borderStyle: 'none' }} />}></Input>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={2} offset={6} style={{ textAlign: 'center', marginTop: '20px' }}>
                        <ButtonFilter />
                    </Col>
                    <Col xs={1} sm={2} md={4} lg={4} xl={2} style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button type="primary" size="middle">
                            <PlusOutlined /> Create New Contact
                        </Button>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
