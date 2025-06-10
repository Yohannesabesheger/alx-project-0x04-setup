import CounterApp from './counter-app';
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      <CounterApp />
    </div>
  );
}
export default Home;