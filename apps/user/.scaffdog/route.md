---
name: "route"
root: "."
output: "src/app"
ignore: ["."]
questions:
  dir: "ディレクトリ名を入力して下さい ex( example/dir )"
  name: "ページ名を入力して下さい  ex( ExamplePage )"
---

# `{{ inputs.dir }}/layout.tsx`

```
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: '{{ inputs.name | pascal }}',
};

const {{ inputs.name | pascal }}Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default {{ inputs.name | pascal }}Layout;
```

# `{{ inputs.dir }}/page.tsx`

```
const {{ inputs.name | pascal }}Page = () => {
  return (
    <div>
      {{ inputs.name | pascal }}Page
    </div>
  )
}

export default {{ inputs.name | pascal }}Page
```
