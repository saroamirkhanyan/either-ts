Usage

```typescript
import * as E from './either';

<<<<<<< HEAD
const sqrt = (x: number): E.Either<string, number> => {
  if (x < 0) return E.left('X cannot be negative');
  return E.right(Math.sqrt(x));
=======
const log = (x: number): E.Either<string, number> => {
  if (x < 0) return E.left('X cannot be negative');
  return E.right(Math.log(x));
>>>>>>> d9e7261 (Changed sqrt to log)
};

console.log(
  E.match(
    (err) => `Error is ${err}`,
    (value) => `Result is ${value}`
  )(log(12))
);
```
