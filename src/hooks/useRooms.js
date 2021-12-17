import { useEffect, useState } from "react";

const useRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('https://blooming-cliffs-04008.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);
    return {
        rooms,
    }
}

export default useRooms;