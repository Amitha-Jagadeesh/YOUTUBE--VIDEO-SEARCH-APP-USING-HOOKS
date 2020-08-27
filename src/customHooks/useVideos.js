import {useState,useEffect} from 'react-hooks'
const KEY = 'AIzaSyChsZ_WlELIhZHRIBhamCZ7G8EIoFr3gy8';
const baseURL='https://www.googleapis.com/youtube/v3';


const useVideos = (defaultSearchTerm)=>{
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
      },[defaultSearchTerm]);

    const search = async (value) =>{
        const response = await axios.get(`${baseURL}/search`,{
            params:{
                part:'snippet',
                maxResults:5,
                key:KEY,
                q:value
            }
        });
        setVideos(response.data.items);
    }
    return [videos,search];
}

export default useVideos