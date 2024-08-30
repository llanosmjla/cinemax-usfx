


export const UrlBase = "https://api.themoviedb.org/3";

export const Options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg5MmU0MmY4MjA5ODg1ZTcyZmM0ODg3ZGZhNzU1MCIsIm5iZiI6MTcyMzI0NjQ5Ni4zODc2ODYsInN1YiI6IjY2YjZhNTg2NTYzZjlmNWJjNTI4MGUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwyOfGWzbLphe6RPogn5fCRwahBvL_sWQ_KMUOTS3j8'
    },
    next: {
        revalidate: 3600,
        tags: ['movies']
    }
};
