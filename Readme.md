# Expo Alert & Modal Example

This project holds two screens with Alert and Modal examples. you can switch them directly on `App.js`, junt uncomment the component you want to return:

```js
// return <Home />;

return (
  <AppModal>
    <Signup />
  </AppModal>
);
```

## Alert Usage

Alert is a simple component, acessible by Alert contant imported from react-native:

```js
import { Alert } from "react-native";

...

Alert.alert("Confirmation", "Are you sure to override data? ", [ buttons array ]);
```

## Modal Usage

This example shows a Modal wrapped in a Context wich requires to:

1. Wrap application (or sub-tree) with context provided by `AppModal` (check `App.js` for complete example):

```js
<AppModal>your screen or app root</AppModal>
```

2. Access context in sub-components to show and hide Modal (check `Signup.jsx` for complete example):

```js
import { ModalContext } from "../components/AppModal";

...

const appModal = useContext(ModalContext);

appModal.show(
  <>
    your content must be passed as modal argument

    dont forget to provide an appModal.hide() callback, e.g. in a Button

    <Button title="OK" onPress={() => appModal.hide()} />
  </>
);

```

Note that the only reference needed by client components is `appModal` context:

```
appModal.show( any view you want to display in modal )
```

```
appModal.hide();
```
