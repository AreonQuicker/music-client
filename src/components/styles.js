import styled from 'styled-components';

export const SongControlsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  .middle {
    i {
      font-size: 30px;
      cursor: pointer;
      color: #4c4c4c;
    }
  }
`;

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: 0.6fr;
  justify-content: center;
  grid-template-rows: auto auto auto;
  .top {
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    &__left {
      color: #202020;
      font-size: 20px;
    }
    &__right {
      justify-self: end;
    }
  }
  .middle {
    color: #919191;
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: 0.7fr;
    justify-content: center;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    &__inner {
      display: grid;
      grid-auto-rows: auto;
      grid-gap: 10px;
      .field {
        display: grid;
        align-items: center;
        grid-gap: 10px;
        grid-template-columns: 100px auto;
        i {
          cursor: pointer;
        }
        .iAndText {
          display: grid;
          grid-template-columns: 30px auto;
          align-items: center;
        }
      }
    }
  }
  .bottom {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dddddd;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__left {
    }
    &__right {
      justify-self: end;
    }
  }
  .submit {
  }
`;
