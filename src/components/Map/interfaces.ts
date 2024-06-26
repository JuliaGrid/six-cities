export interface MapProps {
    city: City;
    points: Point[];
    selectedPoint?: string;
}

export type City = {
    center: [number, number];
};

export type Point = {
    id: number;
    title: string;
    position: [number, number];
};
