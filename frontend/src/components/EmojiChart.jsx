import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = [
  '#e17055', '#00b894', '#6c5ce7', '#fdcb6e',
  '#0984e3', '#d63031', '#fab1a0', '#74b9ff',
  '#ffeaa7', '#55efc4', '#a29bfe', '#636e72',
];

export default function EmojiChart({ data }) {
  const chartData = Object.entries(data).map(([emoji, count]) => ({ emoji, count }));

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#4b5563' }}>Emoji Usage</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="emoji"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ emoji }) => emoji}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              padding: '10px',
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
            }}
            itemStyle={{ color: '#4b5563' }}
            formatter={(value, name) => [`${value} uses`, `Emoji: ${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
