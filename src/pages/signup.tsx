
import { SignUpForm } from "../components/signup/signup-form";
import "../index.css";

export const SignUpPage = () => {
    return (
        <div className="wrapper-signup-form">
            <div className="header-login-form">
                <h1>Đăng Ký</h1>
                <span>Đã có tài khoản? <a href="">Đăng Nhập</a></span>
            </div>

            <div className="content-signup-form">
                <div className="information-form">
                    <h2>Thông tin</h2>
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}
