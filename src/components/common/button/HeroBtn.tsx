export const HeroBtn = ({
  children,
  classnames,
  eventHandler,
}: {
  children: string;
  classnames?: string;
  eventHandler?: any;
}) => {
  return (
    <button
      onClick={eventHandler}
      className={`bg-primary-color px-4 py-1 text-base text-white-neutral rounded-md hover:bg-primary-pale ${classnames}`}
    >
      {children}
    </button>
  );
};
