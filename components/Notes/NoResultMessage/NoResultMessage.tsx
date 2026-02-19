interface NoResultMessageProps {
  invalidQuery?: string;
}

export default function NoResultMessage({
  invalidQuery,
}: NoResultMessageProps) {
  return (
    <div className="flex frow items-center justify-center text-white-400 text-center mobile:text-s24 bg-black-900 py-5 selection:text-purple-800 selection:bg-pink-400">
      {invalidQuery ? (
        <p>
          No results found for&nbsp;
          <i className="text-blue-400">{invalidQuery}</i>
        </p>
      ) : (
        <p>No notes have been added yet</p>
      )}
    </div>
  );
}
