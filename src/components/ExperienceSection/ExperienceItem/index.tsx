export interface ExperienceItemProps {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  jobTitle,
  companyName,
  startDate,
  endDate,
  jobDescription,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-dot"></div>
      <div className="timeline-content">
        <h3 className="timeline-title">{jobTitle}</h3>
        <h4 className="timeline-subtitle">{companyName}</h4>
        <p className="timeline-date">
          {startDate} - {endDate}
        </p>
        <p className="timeline-description">{jobDescription}</p>
      </div>
    </div>
  );
};
