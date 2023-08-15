export default function TimelineItem({
  period,
  company,
  title,
  description,
}: {
  period: string;
  company: string;
  title: string;
  description: string;
}) {
  return (
    <div className="timeline-item clearfix">
      <h5 className="item-period">{period}</h5>
      <span className="item-company">{company}</span>
      <h4 className="item-title">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
