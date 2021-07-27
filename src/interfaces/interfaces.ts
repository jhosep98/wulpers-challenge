interface Origin {
  name: string;
}

interface Location {
  name: string;
}

export interface Character {
  image: string;
  status: string;
  name: string;
  species: string;
  origin: Origin;
  location: Location;
}

export interface Characters {
  results: Character[]
}