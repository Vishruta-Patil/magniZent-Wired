
export const HeroBtn = ({ children, classnames }: { children: string, classnames?: string }) => {
  return (
    <button className={`bg-primary-color px-4 py-1 text-lg text-white-neutral rounded-md hover:bg-primary-pale ${classnames}`}>
      {children}
    </button>
  );
};

