interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

export default function StatsCard({ label, value, icon, color }: StatsCardProps) {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-lg shadow-lg text-white transform hover:scale-105 transition-transform duration-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90 mb-1">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="w-12 h-12 opacity-80">
          {icon}
        </div>
      </div>
    </div>
  );
}