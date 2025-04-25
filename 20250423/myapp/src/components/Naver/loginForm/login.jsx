import { Component } from "react";
class Login extends Component {
    render(){
        return (
            <>
            <div className="container">
                <div className="content">
                    <div className="login_wrap">
                        <ul className="menu_wrap">
                            <li className="menu_item">
                                <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/#none" className="menu_id_on">
                                    <span className="menu_text">
                                        <span className="text">ID/전화번호</span>
                                    </span>
                                </a>
                            </li>

                            <li className="menu_item">
                                <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/#none" className="menu_ones">
                                    <span className="menu_text">
                                        <span className="text">일회용 번호</span>
                                    </span>
                                </a>
                            </li>

                            <li className="menu_item">
                                <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/#none" className="menu_qr">
                                    <span className="menu_text">
                                        <span className="text">QR코드</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <form id="frmNIDLogin">
                            <ul className="pannel_wrap">
                                <li className="pannel_item" style={{display : "block"}}>
                                    <div className="pannel_inner">
                                        <div className="login_form">
                                            <div className="login_box">
                                                <div className="input_item_id">
                                                    <input type="text" className="input_id" maxLength={"41"} placeholder="아이디 또는 전화번호" />
                                                </div>
                                                
                                                <div className="input_item_pw">
                                                    <input type="password" className="input_pw" maxLength={"16"} placeholder="비밀번호" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login_keep_wrap">
                                            <div className="keep_check">
                                                <input type="checkbox" className="input_keep" value={"on"} />
                                                <label className="keep_text">
                                                    로그인 상태 유지
                                                </label>
                                            </div>
                                            
                                            <div className="ip_check">
                                                <a href="https://nid.naver.com/login/ext/help_ip3.html">
                                                    <span className="ip_text">IP보안</span>
                                                </a>
                                                <span className="switch">
                                                    <input type="checkbox" className="switch_checkbox" value={"off"}/>
                                                    <label className="switch_btn">
                                                        <span className="switch_on">ON</span>
                                                        <span className="switch_off">OFF</span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="btn_login_wrap">
                                            <button type="submit" className="btn_login">
                                                <span className="btn_next">로그인</span>
                                            </button>
                                        </div>

                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Login;