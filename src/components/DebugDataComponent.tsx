export default function DebugDataComponent(props: any) {
  const isDev = import.meta.env.DEV;

  return (
    <>
      {isDev && (
        <code className="text-red-500">{JSON.stringify(props.data, null, 2)}</code>
      )}
    </>
  );
}
