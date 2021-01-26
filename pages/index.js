import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function handleInput(infosDoEvento) {
    setName(infosDoEvento.target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <div className="form-center">
                <input
                  onChange={handleInput}
                  placeholder="Diz ai seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {' '}
                  {name}
                </button>
              </div>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thaislsilveira/imersao-react-next.js" />
    </QuizBackground>
  );
}
