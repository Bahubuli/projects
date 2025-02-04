import Avatar from "../../components/Avatar";
import { useFireStore } from "../../hooks/useFireStore";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useNavigate} from 'react-router-dom'


export default function ProjectSummary({project})
{
    const navigate = useNavigate();
    const handleClick = (e)=>{
        deleteDocument(project.id);
        navigate('/');
    }

    const {user} = useAuthContext();
    const {deleteDocument} = useFireStore('projects');

  return (
    <div className="project-summary">
        <h2 className = "page-title">{project.name}</h2>
        <p className = "due-date">
            Project due by {project.dueDate.toDate().toDateString()}
        </p>

        <p className = "details">
            {project.details}
        </p>

        <h4>Project is assigned to:</h4>
        <div className = "assigned-users">

        {project.assignedUsersList.map(user=>(

            <div key = {user.id}>
                <Avatar src = {user.photoURL}/>
            </div>

        ))}
        {/* display complete button only when the creater of project is logined in */}
        </div>
        {user.uid===project.createdBy.id &&
            <button className = "btn" onClick = {handleClick}>Mark as Complete</button>
        }


    </div>
  )
}
