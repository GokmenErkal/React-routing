import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function UserDetails() {

    const { id } = useParams();
    const location = useLocation();
    const [user, setUser] = useState(location.state);


    useEffect(() => {
        if (!user?.id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((data) => setUser(data))
        }

    }, [id, user])

    return (
        <div>
            <h2>Kullanıcı Detayları</h2>
            {
                user && <pre>{JSON.stringify(user, null, 2)}</pre>
            }
            {
                <Link to={`/users/${Number(id) < 10 ? Number(id) + 1 : 1}`}>Sonraki</Link>
            }
        </div>
    )
}

export default UserDetails
