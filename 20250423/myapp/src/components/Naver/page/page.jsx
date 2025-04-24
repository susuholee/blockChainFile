import { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Login from "../loginForm/login";

class Page extends Component {
    render() {
        return (
            <>
              <Header/>
                    <Login/>
              <Footer/>
            </>
        )
    }
}

export default Page;