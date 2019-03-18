import styled from 'styled-components';

export const HeaderStyle = styled.div`
  position: relative;
  background-color: #f6f6f6;
  height: ${props => props.theme.headerHeight};
  border-bottom: 1px solid #aeaeae;
  display: grid;
  grid-template-rows: auto 20px;
  .top {
    border-bottom: 1px solid #aeaeae;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .bottom {
    background-color: #f1f1f1;
    display: flex;
    * {
      text-decoration: none;
    }
    a {
      font-size: 15px;
      padding: 2px;
      display: grid;
      align-items: center;
      height: 100%;
      margin-left: 10px;
      cursor: pointer;
      color: #565656;
      text-align: center;
      :hover {
        color: white;
        background-color: #676767;
      }
    }
  }
`;

export const HeaderLeftStlye = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .left {
    display: grid;
    align-content: center;
    justify-content: center;
  }
  .right {
    display: grid;
    align-items: center;
    grid-template-columns: 0.5fr;
    align-content: center;
    justify-content: center;
  }
`;

export const HeaderMiddleStyle = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  border-left: 1px #eaeaea solid;
  border-right: 1px #eaeaea solid;
  .left {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .right {
    display: grid;
    grid-template-rows: auto 10px;
    &__top {
      color: #565656;
      font-weight: bold;
      display: grid;
      align-items: center;
      justify-items: center;
    }
    &__bottom {
      display: grid;
    }
  }
`;
