import React from 'react';

import Widget from '../Widget';

import Loading from '../../../public/assets/cat.gif';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Widget.Image backgroundImage={Loading} />
      </Widget.Content>
    </Widget>
  );
}
