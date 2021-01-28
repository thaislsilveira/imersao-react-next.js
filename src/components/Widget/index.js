import styled from 'styled-components';
import { shade } from 'polished';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #6a697c;
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
      background-color: #6293db;
      border-radius: 10px 0px 0px 10px;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }

    .button-home {
      background: #fad300;
      height: 32px;
      border-radius: 0px 10px 10px 0px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#fad300')};
      }

      &:disabled {
        background-color: #979797;
        cursor: not-allowed;
      }
    }
  }

  a {
      color: #6293db;
      text-decoration: none;
      cursor: pointer;
    }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
