import axios from "axios"
import { handleError } from "../Helpers/ErrorHandler"
import { ReviewCreate, ReviewGet, ReviewUpdate } from "../Models/Review"

const api = "https://vthacks-backend.onrender.com/api"

// Fetch all reviews
export const reviewGetApi = async (token: string): Promise<ReviewGet[] | undefined> => {
    try {
        const { data } = await axios.get<ReviewGet[]>(`${api}/dorms`, {
            headers: {
                Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

// Fetch a review by ID
// export const reviewGetByIdApi = async (id: string, token: string): Promise<ReviewGet | undefined> => {
//     try {
//         const { data } = await axios.get<ReviewGet>(`${api}/dorms/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`, // Pass token in Authorization header
//             },
//         });
//         return data;
//     } catch (error) {
//         handleError(error);
//     }
// }

// Fetch reviews for the logged-in user
export const reviewGetByUserApi = async (token: string): Promise<ReviewGet[] | undefined> => {
    try {
        const { data } = await axios.get<ReviewGet[]>(`${api}/dorms/user`, {
            headers: {
                Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

// Create a new review
export const reviewCreateApi = async (review: ReviewCreate, token: string): Promise<ReviewGet | undefined> => {
    try {
        const { data } = await axios.post<ReviewGet>(`${api}/dorms`, review, {
            headers: {
                Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

// Update a review by ID
export const reviewUpdateApi = async (id: number, review: Partial<ReviewUpdate>, token: string): Promise<ReviewGet | undefined> => {
    try {
        const { data } = await axios.put<ReviewGet>(`${api}/dorms/${id}`, review, {
            headers: {
                Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

// Delete a review by ID
export const reviewDeleteApi = async (_id: string, token: string): Promise<void> => {
    try {
        await axios.delete(`${api}/dorms/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
        });
    } catch (error) {
        handleError(error);
    }
}
