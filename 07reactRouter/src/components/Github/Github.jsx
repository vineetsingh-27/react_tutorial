import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch("https://api.github.com/users/vineetsingh-27")
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
    // },[])
    // })
  return (
    <>
    <div className='text-xl max-w-5xl m-auto bg-gray-600 text-white text-center p-6'>Github followers: {data.followers}
    <img className='w-[280px] mx-auto mt-4' src={data.avatar_url} alt="git profile" />
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/vineetsingh-27')
    return response.json()
}