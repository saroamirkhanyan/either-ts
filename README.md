Usage

```typescript
import * as E from './either';


const log = (x: number): E.Either<string, number> => {
  if (x < 0) return E.left('X cannot be negative');
  return E.right(Math.log(x));
};

console.log(
  E.match(
    (err) => `Error is ${err}`,
    (value) => `Result is ${value}`
  )(log(12))
);
```
