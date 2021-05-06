import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    background: var(--adaptiveGray50);
    color: var(--adaptiveGray900);
    height: 80vh;

    .color {
      color: var(--red);
    }
  `,
};

export default function Home() {
  return (
    <S.Wrapper>
      <p>hello</p>
      <p className="color">color!</p>
    </S.Wrapper>
  );
}
