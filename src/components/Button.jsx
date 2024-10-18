const Button = ({ name, isBeam = false, containerClass, href, target = "_blank" }) => {
  const ButtonContent = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`btn ${containerClass}`}
      >
        {ButtonContent}
      </a>
    );
  }

  return (
    <button className={`btn ${containerClass}`}>
      {ButtonContent}
    </button>
  );
};

export default Button;