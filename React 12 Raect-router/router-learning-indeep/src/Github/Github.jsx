import React, { useEffect,useState  } from 'react'

function Github() {
        const [data, setData] = useState({}) 

    useEffect(() => {
        fetch("https://api.github.com/users/basharatbutt")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <div>
      <div className="flex text-5xl justify-center align-middle">My GitHub Followers: {data.followers}</div>
    </div>
  )
}

export default Github
