export type ReviewGet = {
    _id: string;
    userName: string;
    name: string;
    room_number: number;
    price: number;
    bathroom_cleanliness: number;
    wifi_strength: number;
    room_size: number;
    safety: number;
    air_conditioning: boolean;
    roommate: boolean;
    comment: string;
}

export type ReviewCreate = {
    userName: string;
    name: string;
    room_number: number;
    price: number;
    bathroom_cleanliness: number;
    wifi_strength: number;
    room_size: number;
    safety: number;
    air_conditioning?: boolean;
    roommate?: boolean;
    comment: string;
}

export type ReviewUpdate = {
    _id: string;
    name?: string;
    room_number?: number;
    price?: number;
    bathroom_cleanliness?: number;
    wifi_strength?: number;
    room_size?: number;
    safety?: number;
    air_conditioning?: boolean;
    roommate?: boolean;
    comment?: string;
}
