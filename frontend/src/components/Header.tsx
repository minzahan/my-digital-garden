import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1
        className="text-3xl font-semibold cursor-pointer tracking-tight"
        onClick={() => navigate('/')}
      >
        My Digital Garden
      </h1>
    </header>
  );
}
