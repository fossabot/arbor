[![Build
Status](https://travis-ci.com/CatchRelease/arbor.svg?branch=master)](https://travis-ci.com/CatchRelease/arbor)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCatchRelease%2Farbor.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FCatchRelease%2Farbor?ref=badge_shield)

[![code style:
prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Arbor

Arbor is a set of React UI components for [Catch&Release's](https://www.catchandrelease.com/) design system.
It is built using [emotion](https://emotion.sh/) and [styled-system](https://github.com/jxnblk/styled-system).

## Getting Started

### Installation

Install the [Arbor package](https://www.npmjs.com/package/@catchandrelease/arbor) and its dependencies.

```
npm install --save @catchandrelease/arbor
```

or

```
yarn add @catchandrelease/arbor
```

### Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Heading, theme } from '@catchandrelease/arbor';
import { ThemeProvider } from 'emotion-theming';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Heading.H1>Hello World</Heading.H1>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('app'));
```

The application must be wrapped in an emotion `ThemeProvider` in order to work.
You can import the base theme from arbor, or customize it and pass in your own.
See [emotion-theming](https://github.com/emotion-js/emotion/blob/master/docs/theming.md).

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCatchRelease%2Farbor.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FCatchRelease%2Farbor?ref=badge_large)