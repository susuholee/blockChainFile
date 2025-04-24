import { Component } from "react";

class Footer extends Component {
    render(){
        return (
            <>
            <div className="footer">
                <div className="footer_inner">
                    <ul>
                        <li>
                            <a href="http://www.naver.com/rules/service.html">
                                <span className="text">이용약관</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.naver.com/rules/privacy.html">
                                <span className="text">
                                    <strong>개인정보처리방침</strong>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.naver.com/rules/disclaimer.html">
                                <span className="text">책임의 한계와 법적고지</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://help.naver.com/alias/membership/p.membership/main.naver">
                                <span className="text">회원정보 고객센터</span>
                            </a>
                        </li>
                    </ul>
                    <div className="footer_copy">
                        <a href="https://www.navercorp.com/">
                            <span className="footer_logo">
                                <span className="blind">네이버</span>
                            </span>
                        </a>
                        <span className="text">Copyright</span>
                        <span className="corp">@ NAVER Corp.</span>
                        <span className="text">All Rights Reserved.</span>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Footer;