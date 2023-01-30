import React, { useContext } from 'react'
import them1 from '../images/theme/black-out.png'
import them2 from '../images/theme/purple-varient.png'
import them3 from '../images/theme/black.png'
import them4 from '../images/theme/blue-yellow.png'
import them5 from '../images/theme/red-purple.png'
import { ThemeDiv } from '../styledComponents/ThemeChangeStyle'
import taskContext from '../context/taskContext'

const themePhoto=[them1,them2,them3,them4,them5]
const themeColors=["#6f6f6ff3","#6f6f6ff3","#e7e5e5f3","#e7e5e5f3","#e7e5e5f3"]
const themeColors2=[["#141313f3","#353434f3"],["#ec35d1f3","#428deff3"],["#000000f3","#000000f3"],["#386bf7f3","#fbeb84f3"],["#b22222f3","#b423dcf3"]]
const txtColor=["#e7e5e5f3","#e7e5e5f3","#191818f3","#191818f3","#191818f3"];

const ThemeChange = () => {


  const {themeBox,setThemeBox,setBg_color2,setBg_color,setTextColor}=useContext(taskContext);

 
  return (
    <ThemeDiv>
        <h1>Select Custom Theme</h1>

        <div className="themes">
            {themePhoto.map((val,ind)=>{
                return(
                <section key={ind} onClick={()=>
                {
                  setThemeBox((prev)=> themeBox.map((val,index)=>index===ind?true:false))
                  setBg_color(themeColors2[ind])
                  setBg_color2(themeColors[ind])
                  setTextColor(txtColor[ind])
                }}>
                    <img src={val} style={{background:themeBox[ind]?"#e0e636ce":"",boxShadow:themeBox[ind]?"2px 2px 10px black":"",padding:"5px",borderRadius:"10px"}} alt="set-theme" />
                </section>
                )
            })}
        </div>

    </ThemeDiv>
  )
}

export default ThemeChange