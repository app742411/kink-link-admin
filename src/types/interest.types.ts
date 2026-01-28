// Interest entity type
export type Interest = {
    _id: string;
    interestName: string; // Using 'interestName' to match API spelling
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

// API Response types
export type GetInterestListResponse = {
    data?: Interest[];
    interests?: Interest[];
    message?: string;
    success?: boolean;
};

export type AddInterestRequest = {
    interestName: string;
};

export type UpdateInterestRequest = {
    interestName: string;
};

export type InterestActionResponse = {
    message: string;
    success: boolean;
    data?: Interest;
};
