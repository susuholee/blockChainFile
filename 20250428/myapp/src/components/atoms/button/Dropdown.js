import React, { useState } from "react";

const Dropdown = () => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState("훈련중");

    const setValueHandler = (e) => {
        setValue(e.target.innerHTML);
    }

    const setActiveHandler = () => {
        setActive((prev) => !prev);
    }

    return (
        <div className={`drop-wrap ${active ? "active" : ""}`}>
            <div className={`drop-box-wrap ${active ? "actvie" : ""}`} onClick={setActiveHandler}>{value}</div>
            <ul className="drop-box-content">
                <li><span onClick={setValueHandler}>훈련중</span></li>
                <li><span onClick={setValueHandler}>훈련 완료</span></li>
            </ul>
        </div>
    )
}

export default Dropdown