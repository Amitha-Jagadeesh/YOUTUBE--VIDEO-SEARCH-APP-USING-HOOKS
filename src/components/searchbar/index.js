import React from 'react'
import {useState} from 'react-hooks'
import App from '../../App'

const SearchBar = ({onFormSubmit})=>{
    const [value,setValue] = useState('');
    
    const hanldeSubmit = (event)=>{
        event.preventDefault()
        onFormSubmit(value)

    }
   
    return(
        <div className="search-bar ui segment">
            <form className = 'ui form' onSubmit = {hanldeSubmit}>
                <div className = "field" style={{float:'left', marginRight:'20px'}}>
                    <label style={{display:'block'}}>Video Search</label>
                    <input type='text' style={{display:'block',width:'300px'}} value = {value} onChange = {(event)=>{setValue(event.target.value)}} name='text' placeholder='Search videos'/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar