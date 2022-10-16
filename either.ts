type OptionHandler<A> = (x: A) => unknown;

export type Left<A, B> = (
  a: OptionHandler<A>,
  b: OptionHandler<B>
) => ReturnType<typeof a>;

export type Right<A, B> = (
  a: OptionHandler<A>,
  b: OptionHandler<B>
) => ReturnType<typeof b>;

export type Either<A, B> = Left<A, B> | Right<A, B>;

export function left<A, B>(x: A): Left<A, B> {
  return (a: OptionHandler<A>, _: OptionHandler<B>) => a(x);
}

export function right<A, B>(x: B): Right<A, B> {
  return (_: OptionHandler<A>, b: OptionHandler<B>) => b(x);
}

export function match<A, B>(
  onLeft: OptionHandler<A>,
  onRight: OptionHandler<B>
) {
  return (e: Left<A, B> | Right<A, B>) => e(onLeft, onRight);
}
