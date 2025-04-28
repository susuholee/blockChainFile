import React, {useState} from "react";
import { puppyImg, catImg, lionImg } from "../images";

const SildeImg = () => {
    // 이미지 데이터 객체
    const imageData = {
        puppy : {
            name : "강아지",
            img : puppyImg,
            content : "귀여운 강아지!!"
        },
        cat : {
            name : "고양이",
            img : catImg,
            content : "고양이 톰!!!"
        },
        lion : {
            name : "사자",
            img : lionImg,
            content : "동물의 왕왕"
        }
    }

    const AnimalKey = Object.keys(imageData);

    // 선택한 인덱스, 업데이트할 인덱스
    const [selectIndex , setIndex] = useState(0);
    const [showContent , setContent] = useState(false);

    // 다음 인덱스로 넘어가는 함스
    const nextHandler = () => {
        setIndex((prevIndex) => {
            if(prevIndex < AnimalKey.length -1) {
                return prevIndex + 1
            } else {
                return prevIndex;
            }
        })
    }

    // 이전 인덱스로 넘어가는 함수
    const prevHandler = () => {
        setIndex((prevIndex) => {
            if(prevIndex > 0) {
                return prevIndex - 1
            } else {
                return prevIndex
            }
        })
    }
    // 상세 내용을 보여주는 함수
    const showHandler = () => {
        setContent(!showContent)
    }
    
    // 현재 선택된 이미지
    const SelectImage = imageData[AnimalKey[selectIndex]];

    return (
        <>
            <div>
                <img src={SelectImage.img} alt={SelectImage.name} />
                <h2>{SelectImage.name}</h2>

            </div>

            <div>
            <button onClick={prevHandler}>이전</button>
            <button onClick={nextHandler}>다음</button>
            </div>

            <div>
                <button onClick={showHandler}>{showContent ? "내용 숨기기" : "내용 보기"}</button>
                {showContent && <p>{SelectImage.content}</p>}
            </div>
        </>
    )
}

export default SildeImg