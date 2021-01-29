import React from 'react';

import Lottie from 'react-lottie-player';

import Widget from '../Widget';

import Loading from '../../../public/assets/lf30_editor_evmcvfy9.json';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Lottie
          play
          loop
          animationData={Loading}
          style={{ height: '300px', width: '300px' }}
        />
      </Widget.Content>
    </Widget>
  );
}
