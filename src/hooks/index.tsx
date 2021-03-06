import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import { CartProvider } from './cart';
import { useTheme } from './theme';

const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
