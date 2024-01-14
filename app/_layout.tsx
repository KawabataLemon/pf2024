import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import { config } from '../tamagui.config'
import { Drawer }  from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const colorScheme = useColorScheme()


  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }

  // const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme
  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme}>
      <ThemeProvider value={DefaultTheme}>
        <Drawer>
         <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: '自己紹介',
            title: 'Who am I',
         }}
        />
         <Drawer.Screen
          name="careers" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'キャリア',
            title: 'キャリア',
         }}
        />
         <Drawer.Screen
          name="projects" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'プロジェクト（副業）',
            title: 'プロジェクト（副業）',
         }}
        />
        </Drawer>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
