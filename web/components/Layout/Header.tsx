import React from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
  `,
};

function Header() {
  const toggleTheme = () => {
    if ([...document.body.classList].includes("dark-mode")) {
      return document.body.classList.remove("dark-mode");
    }
    return document.body.classList.add("dark-mode");
  };
  return (
    <S.Wrapper>
      <div>logo</div>
      <div>
        <button type="button" onClick={toggleTheme}>
          toggle dark mode
        </button>
      </div>
    </S.Wrapper>
  );
}

export default Header;
