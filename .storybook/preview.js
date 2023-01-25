const customViewports = {
  staking1: {
    name: 'Staking 1',
    styles: {
      width: '1440px',
      height: '916px',
    },
  },
  staking2: {
    name: 'Staking 2',
    styles: {
      width: '1280px',
      height: '650px',
    },
  },
  staking3: {
    name: 'Staking 3',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  staking4: {
    name: 'Staking 4',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports }
}