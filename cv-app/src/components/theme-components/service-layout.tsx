import React from 'react';

export default function ServiceLayout({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  // Extract title from children if it's a heading
  let title = "";
  if (React.isValidElement(children)) {
    if (children.props && typeof children.props.children === 'string') {
      title = children.props.children;
    }
  }

  return (
    <div className="info-block-w-icon" role="region" aria-label={`Service: ${title}`}>
      <div className="ci-icon" role="img" aria-label={`${title} icon`}>
        <i className={icon}></i>
      </div>

      <div className="ci-text">{children}</div>
    </div>
  );
}
