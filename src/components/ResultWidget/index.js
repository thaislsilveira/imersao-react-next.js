import React from 'react';

import Widget from '../Widget';

export default function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          perguntas

        </p>
        <ul>
          {results.map((result, index) => {
            const resutlId = index;
            return (
              <li key={resutlId}>
                #
                {index + 1}
                {' '}
                Resultado:
                {' '}
                { result === true ? 'Acertou' : 'Errou'}
              </li>
            );
          })}

        </ul>
      </Widget.Content>
    </Widget>
  );
}
