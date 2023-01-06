import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    background_two: '#be91c6',
    background_three: '#D8C5CB',
    background_four: '#545454',
    primary: '#fea798',
    secondary: '#414757',
    error: '#f13a59',
    success: '#00B386',
  },
  textFeatures: {
    color: 'white',
    fontSize: 17,
    margin: 20,
  },
  box: {
    height: 120,
    width: '100%',
    backgroundColor: '#545454',
    borderRadius: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
  },
  center: {
    flex: 1,
    marginTop: 100,
    margin: 24,
  },
  back: {
    marginTop: 10,
    margin: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  check: {
    marginRight: 20,
    marginBottom: 20,
  },
};
