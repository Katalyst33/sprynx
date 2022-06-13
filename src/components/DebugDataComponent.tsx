export default function Debug(props: any) {
  const isDev = import.meta.env.DEV;

  return (
    <>
      {isDev && (
        <code className="text-red-500">{JSON.stringify(props.data)}</code>
      )}
    </>
  );
}
