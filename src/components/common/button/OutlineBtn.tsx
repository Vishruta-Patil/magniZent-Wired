
export const OutlineBtn = ({ children, classnames }: { children: string, classnames?: string }) => {
  return (
    <button className={`bg-white-neutral px-4 py-1 text-lg text-primary-color border-2 border-primary-color rounded-md hover:opacity-60 ${classnames}`}>
      {children}
    </button>
  );
};

