export interface PlacesItemProps {
    item: {
        img: string;
        price: string;
        name: string;
        type: string;
        id: string;
        isFavorite: boolean;
        isPremium: boolean;
    };
    onListItemHover: (listItemName: string) => void;
}
