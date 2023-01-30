import taskContext from './taskContext'
import React, { useCallback, useState } from 'react'

const TaskState = (props) => {
   const host = 'http://localhost:5000/brainiac'

   const [tasks, setTasks] = useState([])
   const [networkPosts, setNetworkPosts] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [inputField, setInputField] = useState([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
   ])
   const [language, setLanguage] = useState('')

   const [bg_color, setBg_color] = useState(['#6e21b1', '#c49bedf3']) //initial theme for back
   const [bg_color2, setBg_color2] = useState('#e7e5e5f3') // inital theme for content
   const [textColor, setTextColor] = useState('#191818f3')

   const [themeBox, setThemeBox] = useState([false, false, false, false, false])

   const [navbarBlink, setNavbarBlink] = useState(true)

   const [fitnessCourse, setFitnessCourse] = useState('')

   //Alert box for signin and logout

   const [alert, setAlert] = useState(['', '', ''])

   // const [bg_color2, setBg_color2] = useState("white");

   const [activity, setActivity] = useState([
      { icon: 'fa-person-running', name: 'Exercise', color: 'red' },
      { icon: 'fa-pen', name: 'Writing', color: 'orange' },
      { icon: 'fa-book', name: 'Reading', color: '#AE990C' },
      { icon: 'fa-laptop', name: 'Working', color: '#39BA0E' },
      { icon: 'fa-calendar-days', name: 'Event', color: '#0D9588' },
      { icon: 'fa-cart-shopping', name: 'Shopping', color: '#045EA9' },
      { icon: 'fa-tv', name: 'Entertainment', color: '#0106FB' },
      { icon: 'fa-paperclip', name: 'Note', color: '#C901FB' },
      { icon: 'fa-money-check', name: 'Bills', color: '#FB01D2' },
   ])

   const [ScheduleRoute, setScheduleRoute] = useState('main')

   const getNetworkPosts = async () => {
      const response = await fetch('http://localhost:5000/brainiac/getPosts', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      })
      const data = await response.json()

      setNetworkPosts(data.reverse())
   }

   const getTasks = async () => {
      setIsLoading(true)
      const response = await fetch(`${host}/fetchTasks`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
      })

      let json = await response.json()
      setIsLoading(false)
      setTasks(json)
   }

   const addTask = async (task, weekDay, iconIndex) => {
      setIsLoading(true)
      const response = await fetch(`${host}/addTask`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
         body: JSON.stringify({ task, weekDay, iconIndex }),
      })

      const data = await response.json()
      setTasks(tasks.concat(data))
      setIsLoading(false)
   }

   const deleteTask = async (id) => {
      setIsLoading(true)
      const response = await fetch(`${host}/deleteTask/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
      })

      const newTask = tasks.filter((val) => {
         return val._id !== id
      })
      setIsLoading(false)
      setTasks(newTask)
   }

   const updateTask = async (id) => {
      setIsLoading(true)
      const response = await fetch(`${host}/updateTaskStatus/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
      })

      let newData = JSON.parse(JSON.stringify(tasks))

      for (let i = 0; i < newData.length; i++) {
         const element = newData[i]
         if (element._id === id) {
            element.status = true
            break
         }
      }

      setIsLoading(false)
      setTasks(newData)
   }

   const [userD, setUserD] = useState([])

   const getUserData = async () => {
      setIsLoading(true)
      const response = await fetch(`${host}/getUserData`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
      })

      const json = await response.json()

      setIsLoading(false)
      setUserD(json)
   }

   const resetAlert=()=>{
      setTimeout(() => {
         setAlert(['', '', ''])
         
      }, 4000);
   }
   // pagination

   // const [page, setPage] = useState(1);

   // modal
   const [isOpen, setIsOpen] = useState(false)
   const open = useCallback(() => setIsOpen(true))
   const close = useCallback(() => setIsOpen(false))


   // post likes

   const [likesData, setlikesData] = useState([])
   const getLikes=async(postid)=>{
      const response= await fetch(`${host}/getLikes/`,{
         method:"GET",
         headers:{
            'Content-Type': 'application/json',
             auth_token: localStorage.getItem('token'),
         },
      })

      const json=await response.json();
      setlikesData(json)
   }


   const [comments,setComments]=useState([]);

   const addComment= async(userid,comment,username)=>{
      const response = await fetch(`${host}/addComment/${userid}`,{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
         body: JSON.stringify({comment,username}),
      })
      const data=await response.json();
      setComments(comments.concat(data))

   }

   const getComments=async(postid)=>{
      const response= await fetch(`${host}/allComments/${postid}`,{
         method:"GET",
         headers:{
            'Content-Type': 'application/json',
             auth_token: localStorage.getItem('token'),
         },
      })

      const json=await response.json();
      setComments(json)
   }
  

   return (
      <taskContext.Provider
         value={{
            comments,
            setComments,
            getComments,
            addComment,
            getLikes,
            likesData,
            setlikesData,
            getTasks,
            addTask,
            deleteTask,
            tasks,
            isLoading,
            inputField,
            setInputField,
            updateTask,
            ScheduleRoute,
            setScheduleRoute,
            activity,
            setActivity,
            language,
            setLanguage,
            bg_color,
            setBg_color,
            bg_color2,
            setBg_color2,
            // page,
            // setPage,
            themeBox,
            setThemeBox,
            open,
            close,
            isOpen,
            setNavbarBlink,
            navbarBlink,
            textColor,
            setTextColor,
            setFitnessCourse,
            fitnessCourse,
            getUserData,
            userD,
            setAlert,
            alert,
            setNetworkPosts,
            networkPosts,
            getNetworkPosts,
            resetAlert,
         }}
      >
         {props.children}
      </taskContext.Provider>
   )
}

export default TaskState
