
interface DotIndicatorProps {
  selected: boolean;
  onClick: () => void;
}

export const DotIndicator = ({ selected, onClick }: DotIndicatorProps) => {
  return (
    <button
      className={`w-2 h-2 rounded-full mx-1 transition-colors ${
        selected ? "bg-accent" : "bg-accent/30"
      }`}
      onClick={onClick}
    />
  );
};
