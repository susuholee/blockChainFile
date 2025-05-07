import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const TitleStyle = styled.li`
    /* ${Link} {

    }  */
    position: relative;
    list-style: none;
    & * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    .title-link {
        color : #6E759F;
        font-size: 20px;
        line-height: 40px;
    }

    &.tag::before {
        content: "";
        background-color: #5569FF;
        transform: translateY(50%);
        width: 24px;
        height: 4px;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
    }

`

const Title = ({tag = false, path, children}) => {

  return (
    <TitleStyle className={tag ? "tag" : ""}>
        <Link className='title-link' to={path}>
            {children}
        </Link>
    </TitleStyle>
  )
}

export default Title
