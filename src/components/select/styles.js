// Libs
import styled, { css, keyframes } from "styled-components";

const SlideAnim = keyframes`
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;

  label {
    color: #fff;
    font-size: 16px;
    text-align: center;

    margin-bottom: 0.5rem;
  }
`;

export const Select = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  border-radius: 32px;
  background: #006032;

  z-index: 2;
  overflow: hidden;
  box-shadow: inset 5px 5px 15px 5px rgba(0, 0, 0, 0.22);

  p {
    display: flex;
    align-items: center;

    width: 89%;
    height: 100%;
    border-radius: 32px;

    padding: 0.3rem 1rem;

    z-index: 2;
    font-size: 14px;
    color: #ffffffcc;
    background: #006032;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const BoxIcon = styled.figure`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);

  width: 37.5px;
  height: 100%;

  z-index: -1;
  cursor: pointer;
  border-radius: 32px;
  border: 2px solid #006032;
  background: #fff;

  img {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
`;

export const Dropdown = styled.div`
  ${({ isOpen }) => css`
    display: ${isOpen ? "block" : "none"};
    position: absolute;
    top: 1rem;
    left: 0;

    width: 100%;
    padding-top: 1rem;

    background: #006032;
    box-shadow: 0px 15px 16px -3px rgba(0, 0, 0, 0.59);
    border-radius: 0 0 8px 8px;

    overflow: hidden;
    animation: ${SlideAnim} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  `}
`;

export const Options = styled.p`
  ${({ isSelected }) => css`
    cursor: pointer;
    color: ${isSelected ? "#FFF" : "#FFFFFF80"};
    font-size: 14px;
    font-weight: 300;
    padding: 0.2rem 1rem;
    background: ${isSelected && "#408865"};

    :hover {
      background: #408865;
    }
  `}
`;
