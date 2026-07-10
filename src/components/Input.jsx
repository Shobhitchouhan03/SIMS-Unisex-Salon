import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { label, id, error, hint, className = '', as: Component = 'input', children, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-ink/80">
          {label}
        </label>
      )}
      <Component
        ref={ref}
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={`w-full rounded-xl border bg-white/60 px-4 py-3 text-ink placeholder:text-ink/40 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-maroon/40 ${
          error ? 'border-maroon' : 'border-ink/15'
        } ${className}`}
        {...props}
      >
        {children}
      </Component>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-maroon">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-sm text-ink-soft">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
