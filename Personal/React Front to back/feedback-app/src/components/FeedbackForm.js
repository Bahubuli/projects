import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
export default function FeedbackForm({handleAdd}) {

    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');
    const [rating,setRating] = useState(10);


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(text.trim().length>10)
        {
            const newFeedback = {
                text,
                rating
            }

           handleAdd(newFeedback);
           setText('');
        }
    }

    const handleTextChange = (e)=>
    {
        if(text==='')
        {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text!=='' && text.trim().length<=10)
        {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        else
        {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value)
    }

  return (
   <Card>
    <form onSubmit = {handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect setRating = {setRating}/>
        <div className = "input-group">
            <input
            type = "text"
             placeholder='Write a review'
             onChange={handleTextChange}
             value = {text}/>
            <Button type = "submit" isDisabled = {btnDisabled} >Send</Button>
        </div>
        {message && <div className = "message">{message}</div>}
    </form>
   </Card>
  )
}
