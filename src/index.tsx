import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';
import { ThemeProvider } from './hooks/theme';

import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <ThemeProvider>
      <AppContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <Routes />
        <ThemeSwitcher />
      </AppContainer>
    </ThemeProvider>
  </View>
);

export default App;
