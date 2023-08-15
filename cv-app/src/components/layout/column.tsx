export default function Column({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  children,
}: {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  children: React.ReactNode;
}) {
  const getColumnClasses = () => {
    const classes = [];

    if (xs) {
      classes.push(`col-xs-${xs}`);
    }
    if (sm) {
      classes.push(`col-sm-${sm}`);
    }
    if (md) {
      classes.push(`col-md-${md}`);
    }
    if (lg) {
      classes.push(`col-lg-${lg}`);
    }
    if (xl) {
      classes.push(`col-lg-${xl}`);
    }
    if (xxl) {
      classes.push(`col-lg-${xxl}`);
    }

    return classes.join(" ");
  };

  return (
    <div className={getColumnClasses()}>
      <div className="column-content">{children}</div>
    </div>
  );
}
