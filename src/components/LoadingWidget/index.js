import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import LoadingCat from '../../assets/lf30_editor_evmcvfy9.json';

import Widget from '../Widget';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Player
          autoplay
          loop
          src={LoadingCat}
          style={{ height: '300px', width: '300px' }}
        />
      </Widget.Content>
    </Widget>
  );
}
