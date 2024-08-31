import { useEffect, useState } from 'react';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg5MmU0MmY4MjA5ODg1ZTcyZmM0ODg3ZGZhNzU1MCIsIm5iZiI6MTcyMzI0NjQ5Ni4zODc2ODYsInN1YiI6IjY2YjZhNTg2NTYzZjlmNWJjNTI4MGUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwyOfGWzbLphe6RPogn5fCRwahBvL_sWQ_KMUOTS3j8'
    }
};

function getActorDetails(actorId: number) {
    return fetch(`https://api.themoviedb.org/3/person/${actorId}`, options)
        .then(res => res.json());
}

const useActor = (actorId: number) => {
    const [actor, setActor] = useState<any>(null);

    useEffect(() => {
        if (actorId) {
            getActorDetails(actorId)
                .then(data => {
                    setActor(data);
                })
                .catch(err => console.error(err));
        }
    }, [actorId]);

    return { actor };
};

export default useActor;
