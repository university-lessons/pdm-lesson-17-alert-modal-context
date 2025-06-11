<!-- prettier-ignore-start -->
# Expo Alert & Modal Example with Context API

This project contains two examples with Alert and Modal. Modal is implemented using Context API with a custom Consumer hook.

## Alert Usage

Alert is a component acessible by Alert contant imported from react-native:

```js
import { Alert } from "react-native";

...

Alert.alert("Confirmation", "Are you sure to override data? ", [ buttons array ]);
```

Check [src/examples/AlertExample.tsx](src/examples/AlertExample.tsx) for details.

## Modal Usage

This example shows a Modal wrapped in a Context wich requires to:

1. Wrap application (or sub-tree) with context provided by `Modal.Provider` (check [App.tsx](App.tsx) for complete details):

```js
<Modal.Provider>
  your screen or app root
</Modal.Provider>
```

Tip: if you're using Expo Router you can wrap the entire `_layout` to ensure all screens have access to the modal context.

2. Access context in sub-components using the custom hook to show and hide Modal:

```js
import { useModal } from "../components/ModalProvider";

...

const modal = useModal();

modal.show(
  <>
    your content must be passed as modal argument

    dont forget to provide an modal.hide() callback, e.g. in a Button

    <Button title="OK" onPress={() => modal.hide()} />
  </>
);

```

You can also make use of `Modal`, `Modal.Header` and `Modal.Footer` components:

```js
<Modal>
  <Modal.Header title="Modal title" withCloseButton />

  Your modal content here...

  <Modal.Footer
    primaryAction={{
      title: "OK",
      onPress: () => {
        console.log("Primary Action!");
      },
    }}
    secondaryAction={{
      title: "Cancel",
      onPress: () => {
        console.log("Secondary Action!");
      },
    }}
  />
</Modal>

```


Note that the only reference needed by client components is `modal` context from `useModal` hook:

```js
modal.show( 
  any view you want to display in modal 
)
```

```js
modal.hide();
```

Want to use this modal in your project? Just copy [src/components/Modal/](src/components/Modal/) folder and use it. You can change modal styles in `styles.ts` 😉

Check [src/examples/ModalExample.tsx](src/examples/ModalExample.tsx) for details.

<!-- prettier-ignore-end -->
