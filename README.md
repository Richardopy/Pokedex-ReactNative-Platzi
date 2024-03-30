# Notas de la Ruta Desarrollo de Apps Multiplataforma - React Native

Platzi: Ruta **Desarrollo de Apps Multiplataforma**

- [Curso Práctico de React Native: Manejo de Listas y Consumo de APIs](https://platzi.com/cursos/react-native-listas-apis/)
- [Curso Práctico de React Native: Formularios, Almacenamiento y Deploy](https://platzi.com/cursos/react-native-formularios-almacenamiento/)

## Publish app

- [Build setup expo](https://docs.expo.dev/build/setup/)
- [Build for app stores](https://docs.expo.dev/build/setup/#build-for-app-stores)
- [Build APKs for Android Emulators and devices](https://docs.expo.dev/build-reference/apk/)
- [Configuring a profile to build APKs](https://docs.expo.dev/build-reference/apk/#configuring-a-profile-to-build-apks)

```
npm install -g eas-cli
eas login
eas build:configure
```
> generar .aab: `eas build -p android`

> generar .apk: `eas build -p android --profile preview` se debe editar el archivo `eas.json`

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}
```



## Docs

- [React navigation](https://reactnavigation.org/docs/getting-started)

## Depencias

```
yarn add @react-navigation/native

expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler

yarn add @react-navigation/native-stack
yarn add @react-navigation/stack

yarn add @react-navigation/bottom-tabs
yarn add react-native-vector-icons

yarn add lodash
```

## safeAreaView

```
npm install react-native-safe-area-context
```

## Run dev

```
yarn start
```

## Styles platform

using: `import { Platform } from "react-native";`

> `Platform` permite saber el OS del dispositivo

```
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

```

## Apis & docs

- [Pokemon API](https://pokeapi.co/)

# [Curso Práctico de React Native: Formularios, Almacenamiento y Deploy](https://platzi.com/cursos/react-native-formularios-almacenamiento/)

### Dependencias

- Formik
- Yup
- [async-storage](https://yarnpkg.com/package/@react-native-community/async-storage)

```
yarn add formik yup
yarn add @react-native-async-storage/async-storage
```
