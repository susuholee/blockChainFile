import { Component } from "react";

class Header extends Component {
    render(){
        return(
            <>
            <header className="header">
                <div className="header_inner">
                    <a href="https://www.naver.com/">
                    </a>
                    <div className="lang">
                        <select name="local_switch" title="언어선택" className="sel">
                            <option value="ko_KR">한국어</option>
                            <option value="en_US">영어</option>
                            <option value="zh-Hans_CN">中文(简体)</option>
                            <option value="zh-Hant_TW">中文(台灣)</option>
                        </select>
                    </div>
                </div>
            </header>
            </>
        )
    }
}

export default Header;