# `@braze/beacon-hooks`

## Installation

To install this component into your project:

```bash
yarn add @braze/beacon-hooks
```

## Usage

```ts
import { useId } from "@braze/beacon-hooks";

const MyComponent = ({
  id: string | null
  ...
}) => {
  // .. other code here
  const generatedId = useId("some-prefix");

  return (<div id={id || generatedId} >...</div>)
}
```
