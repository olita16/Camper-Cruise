import styled from "styled-components";

export const PictureSection = styled.section`
  padding: 30px 0;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    img {
      width: calc(25% - 15px); 
      max-width: 400px; 
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 25px;

    img {
      width: calc(20% - 25px); 
      max-width: 700px; 
    }
  }
`;

export const PicturePositionWrap = styled.div`
  display: flex;
  justify-content: center; 
  margin: 25px 0;

  img {
    width: 150px; 
    height: auto;
    object-fit: cover;
  }

  img:not(:last-child) {
    margin-right: 25px; 
  }

  @media screen and (min-width: 768px) {
    img {
      width: 300px; 
    }

    img:not(:last-child) {
      margin-right: 25px; 
    }
  }

  @media screen and (min-width: 1440px) {
    img {
      width: 400px; 
    }

    img:not(:last-child) {
      margin-right: 20px; 
    }
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;

  & p:not(:last-child) {
    margin-bottom: 25px;
  }

  h2 {
    text-align: center;
  }

  div {
    position: sticky;
    top: 110px;
  }
`;