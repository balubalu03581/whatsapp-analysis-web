import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function TopContacts({ data }) {
  const chartData = Object.entries(data).map(([name, count]) => ({ name, count }));

  return (
    <div style={{ marginBottom: '15px' }}>
      <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#4b5563' }}>Top Contacts</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 14, fill: '#4b5563' }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fontSize: 14, fill: '#4b5563' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#d5e3df',
              border: '1px solid rgb(90, 185, 116)',
              borderRadius: '10px',
              fontSize: '14px',
              padding: '12px',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease-in-out',
              color: '#4b5563',
              fontWeight: '500',
            }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#00b894"
            strokeWidth={2}
            dot={{ fill: '#00b894', stroke: '#00b894', r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
