export const HeroBtn = ({
  children,
  classnames,
  eventHandler,
  disableProperty=false
}: {
  children: string;
  classnames?: string;
  eventHandler?: React.MouseEventHandler<HTMLButtonElement>;
  disableProperty?: boolean
}) => {
  return (
    <button
      onClick={eventHandler}
      className={`bg-primary-color px-4 py-1 text-base text-white-neutral rounded-md hover:bg-primary-pale ${classnames} ${disableProperty ? "cursor-not-allowed" : "cursor-pointer"}`}
      disabled={disableProperty} 
    >
      {children}
    </button>
  );
};
