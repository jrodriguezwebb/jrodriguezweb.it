interface InfoListProps {
  children: React.ReactNode;
}

export const InfoList: React.FC<InfoListProps> = ({ children }) => {
  return (
    <div id="info_list_1" className="info-list-w-icon">
      {children}
    </div>
  );
};
