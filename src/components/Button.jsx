import { forwardRef } from 'react';

const variants = {
  primary: 'bg-maroon text-paper hover:bg-maroon-dark focus-visible:bg-maroon-dark',
  outline: 'border border-ink/20 text-ink hover:border-ink/50 bg-transparent',
  ghost: 'text-ink hover:bg-ink/5 bg-transparent',
  brass: 'bg-brass text-ink hover:bg-brass-light',
};

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-3',
  lg: 'text-base md:text-lg px-7 py-4',
};

const Button = forwardRef(function Button(
  { as: Component = 'button', variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  return (
    <Component
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;
