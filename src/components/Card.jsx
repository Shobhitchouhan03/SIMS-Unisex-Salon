export default function Card({ className = '', borderColor = 'border-ink/10', children, as: Component = 'div', ...props }) {
  return (
    <Component
      className={`bg-paper border ${borderColor} rounded-card shadow-card transition-shadow duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
