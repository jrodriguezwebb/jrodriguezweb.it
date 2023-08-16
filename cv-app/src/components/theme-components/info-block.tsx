interface InfoBlockProps {
  iconClass: string;
  title: string;
  text: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  iconClass,
  title,
  text,
}) => {
  return (
    <div className="info-block-w-icon">
      <div className="ci-icon">
        <i className={`linecons ${iconClass}`}></i>
      </div>
      <div className="ci-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
