const Key = ({ children, action }) => {
  return (
    <div className="flex flex-col items-center justify-center text-xs m-3">
      <div className="bg-gray-100 rounded px-2 py-1 uppercase  font-mono border-gray-200 border border-solid shadow">
        {children}
      </div>
      <div className="mt-2 text-gray-600">{action}</div>
    </div>
  );
};

export default Key;
