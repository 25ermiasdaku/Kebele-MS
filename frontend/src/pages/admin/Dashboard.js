import { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import MapView from '../../components/GISMap';
import AIAssistant from '../../components/AIAssistant';
import { getPopulationStats, getServiceStats, getFinanceStats } from '../../services/api';

export default function AdminDashboard() {
  const [population, setPopulation] = useState({});
  useEffect(() => {
    getPopulationStats().then(setPopulation);
  }, []);
  const popChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ label: 'Population', data: [12500, 12700, 13020, 13250], borderColor: '#F97316' }]
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-dark-blue mb-6">Admin Master Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow"><Line data={popChart} /><p>Total: {population.total || 13250}</p></div>
        <div className="bg-white p-4 rounded shadow"><Bar data={{ labels: ['Pending','Approved'], datasets: [{ data: [45, 120], backgroundColor: '#0F172A' }] }} /></div>
        <div className="bg-white p-4 rounded shadow"><p>Revenue: 125,000 ETB</p></div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow h-96"><MapView /></div>
        <div className="bg-white p-4 rounded shadow"><AIAssistant /></div>
      </div>
    </div>
  );
}
