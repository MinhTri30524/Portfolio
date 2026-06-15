function Button({ href, variant = "primary", children, className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 min-h-[44px]";

  const variants = {
    primary:
      "bg-accent text-black hover:bg-accent-hover active:scale-[0.97]",
    outline:
      "border border-border-strong text-text-primary hover:border-accent hover:text-accent active:scale-[0.97]",
    ghost:
      "text-text-secondary hover:text-accent active:scale-[0.97]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
