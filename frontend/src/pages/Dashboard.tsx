import Tile from '@/components/Tile';
import { dashboardTiles } from '@/data/dashboardTiles';

export default function Dashboard() {
  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
      {dashboardTiles.map((tile) => (
        <Tile
          key={tile.id}
          title={tile.title}
          description={tile.description}
          slug={tile.slug}
        />
      ))}
    </div>
  );
}
