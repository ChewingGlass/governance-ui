import cx from '@hub/lib/cx';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  const { className, ...rest } = props;

  return (
    <input
      className={cx(
        'bg-zinc-50',
        'border-zinc-300',
        'border',
        'h-14',
        'px-3',
        'outline-none',
        'rounded-md',
        'text-neutral-900',
        'transition-colors',
        'hover:border-zinc-400',
        'focus:border-sky-500',
        'placeholder:text-neutral-400',
        className,
      )}
      {...rest}
    />
  );
}
