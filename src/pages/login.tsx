import { Button, Divider } from "antd";
import { LoginForm } from "../components/login/login-form";
import "../index.css";
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
export const LoginPage = () => {
    return (
        <div className="wrapper-background">
            <div className="wrapper-login-form">
                <div className="header-form">
                    <h1>Đăng Nhập</h1>
                    <span>
                        Không có tài khoản?
                        <Link to="/signup" > Đăng Ký</Link>
                    </span>
                </div>
                <div className="content-login-form">
                    <LoginForm />
                </div>
                <Divider>ĐĂNG NHẬP VỚI</Divider>
                <div className="footer-login-from">
                    <Button icon={<GooglePlusOutlined style={{ color: "#800020" }} />} shape="round"></Button>
                    <Button icon={<FacebookOutlined style={{ color: "#385898" }} />} shape="round"></Button>
                </div>
                <a href="">Chính sách bảo mật</a>
            </div>
        </div>
    )
}
