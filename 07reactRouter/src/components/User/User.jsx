import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-600 py-6 text-white text-xl'>User: {userid}</div>
  )
}

export default User