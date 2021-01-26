import styled from 'styled-components';
import { shade } from 'polished';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #f9a825;
  background-color: #bf996f;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  form {
    margin: 40px 0;
    text-align: center;

    .form-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      padding: 10px;
      height: 32px;
      flex: 1;
      border: 0;
      background-color: #94443f;
      border-radius: 10px 0px 0px 10px;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      background: #f9a825;
      height: 32px;
      border-radius: 0px 10px 10px 0px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#f9a825')};
      }
    }
  }
`;

export default Widget;
