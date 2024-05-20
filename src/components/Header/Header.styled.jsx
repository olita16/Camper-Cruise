import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const HeaderBlock = styled.header`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    min-height: 100px;
    background-color: var(--background);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    z-index: 999;
`;

export const Nav = styled.nav`
ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`;

export const NavigLink = styled(NavLink)`
    color: var(--text-color);

    &#favs{
        position: relative;
    }

    &#favs div {
        font-size: 16px;
        position: absolute;
        top: 0;
        right: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        padding: 5px;
        background-color: var(--accent-red);
        color: var(--white);
    }
    
    svg {
     fill:none ;
     stroke: var(--text-color);
    }

    &.active::after{
        display: block;
        content: "";
        width: 100%;
        height: 5px;
        border-radius: 15px;
        background-color: var(--accent-red);
    }
`;