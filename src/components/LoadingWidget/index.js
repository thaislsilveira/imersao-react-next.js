import React from 'react';
import db from '../../../db.json';

import Widget from '../Widget';

// import Loading from '../../../public/assets/cat.gif';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Widget.Image backgroundImage="https://i.gifer.com/5FBP.gif" backgroundSize="cover" />
      </Widget.Content>
    </Widget>
  );
}
