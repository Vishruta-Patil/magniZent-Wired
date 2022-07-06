export const OutlineBtn = ({
  children,
  classnames,
  eventHandler
}: {
  children: string;
  classnames?: string;
  eventHandler?: any;
}) => {
  return (
    <button
      onClick={eventHandler}
      className={`bg-white-neutral px-4 py-1 text-lg text-primary-color border-2 border-primary-color rounded-md hover:opacity-60 ${classnames}`}
    >
      {children}
    </button>
  );
};
