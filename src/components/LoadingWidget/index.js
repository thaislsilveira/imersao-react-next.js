import React from 'react';

import Image from 'next/image';

import Widget from '../Widget';

import Loading from '../../../public/assets/loading.gif';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Image
          src={Loading}
          alt="Loading"
          width={500}
          height={500}
        />
      </Widget.Content>
    </Widget>
  );
}
