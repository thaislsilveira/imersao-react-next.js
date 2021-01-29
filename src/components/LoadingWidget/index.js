import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

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
          src="https://assets4.lottiefiles.com/packages/lf20_w6urrngw.json"
          style={{ height: '300px', width: '300px' }}
        />
      </Widget.Content>
    </Widget>
  );
}
