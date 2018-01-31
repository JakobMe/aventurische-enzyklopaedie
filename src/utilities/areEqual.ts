export default function areEqual(first: any, ...others: any[]): boolean {
  return others.every(
    (item: any) => JSON.stringify(item) === JSON.stringify(first)
  );
}
