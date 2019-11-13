import { css } from 'styled-components';

export const fontStyle = css`
  @font-face {
    font-family: 'Proxima Nova', sans-serif;
    src: url('./ProximaNova/MarkSimonson-ProximaNova.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Proxima Nova', sans-serif;
    src: url('./ProximaNova/MarkSimonson-ProximaNovaRegularIt.ttf')
      format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Proxima Nova', sans-serif;
    src: url('./ProximaNova/MarkSimonson-ProximaNovaLight.ttf')
      format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Proxima Nova', sans-serif;
    src: url('./ProximaNova/MarkSimonson-ProximaNovaMedium.ttf')
      format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Proxima Nova', sans-serif;
    src: url('./ProximaNova/MarkSimonson-ProximaNovaSemibold.ttf')
      format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Proxima Nova', sans-serif;
    src: url('./ProximaNova/MarkSimonson-ProximaNovaABold.ttf')
      format('truetype');
    font-weight: 800;
  }

  * {
    font-family: 'Proxima Nova', sans-serif;
  }
`;
