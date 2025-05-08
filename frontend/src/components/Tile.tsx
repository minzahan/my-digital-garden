import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

type TileProps = {
  title: string;
  description: string;
  slug: string;
};

export default function Tile({ title, description, slug }: TileProps) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/${slug}`)}
      className="cursor-pointer transition-shadow hover:shadow-lg"
    >
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
