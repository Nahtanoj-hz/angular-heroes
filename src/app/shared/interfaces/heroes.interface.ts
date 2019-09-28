export interface IHero {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    };
    resourceURI: string;
}

export interface IHeroesList {
    data: {
        count: number;
        limit: number;
        offset: number;
        results: IHero[];
        total: number;
    }
}