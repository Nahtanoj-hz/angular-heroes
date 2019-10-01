export interface IHero {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    };
    comics: {
        available: number;
    };
    series: {
        available: number;
    };
    stories: {
        available: number;
    };
    events: {
        available: number;
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