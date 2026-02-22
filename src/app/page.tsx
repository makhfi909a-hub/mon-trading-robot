import TradingChart from './components/Chart';
import ControlPanel from './components/ControlPanel';

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Alpha Trading Bot</h1>
      <ControlPanel />
      <TradingChart />
    </main>
  );
}
