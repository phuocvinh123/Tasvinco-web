export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        right: '40px',
        zIndex: 1,
        top: '55px',
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
        left: '550px',
        zIndex: 1,
        top: '55px',
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
};
