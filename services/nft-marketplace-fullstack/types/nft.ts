export type Trait = 'attack' | 'health' | 'speed';

export type NftAttribute = {
   trait_type: Trait;
   value: string;
}

export type NftMetaData = {
   description: string;
   image: string;
   name: string;
   attributes: NftAttribute[];
}