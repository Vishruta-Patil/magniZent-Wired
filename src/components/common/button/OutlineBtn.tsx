export const OutlineBtn = ({
  children,
  classnames,
  eventHandler,
  disableProperty=false
}: {
  children: string;
  classnames?: string;
  eventHandler?:  React.MouseEventHandler<HTMLButtonElement>,
  disableProperty?:boolean
}) => {
  return (
    <button
      onClick={eventHandler}
      disabled={disableProperty}
      className={`bg-white-neutral px-4 py-1 text-lg text-primary-color border-2 border-primary-color rounded-md hover:opacity-60 ${classnames} ${disableProperty ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {children}
    </button>
  );
};
