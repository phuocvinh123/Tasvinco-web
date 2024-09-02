export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        right: '160px',
        zIndex: 1,
        top: '0px',
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
};

export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        left: '1350px',
        zIndex: 1,
        top: '0px',
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
};
