import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  
  export default function Charts({ data, title }) {
    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));
  
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 lg:p-8 m-4">
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#4b5563' }}>
          {title}
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={chartData}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#e0e7ff',
                border: '1px solid #c7d2fe',
                borderRadius: '10px',
                fontSize: '14px',
                padding: '12px',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease-in-out',
                color: '#4b5563',
                fontWeight: '500',
              }}
              wrapperStyle={{
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            />
  
            {/* Bar + Line combo */}
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Line dataKey="value" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
  