interface Origin {
  name: string;
}

interface Location {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  origin: Origin;
  location: Location;
}

export interface Characters {
  results: Character[];
}
