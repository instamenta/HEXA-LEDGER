export default async function Await<T>(
   {promise, children}: {
      promise: Promise<T>
      children: (value: T) => JSX.Element
   }
) {
   return children(await promise)
}