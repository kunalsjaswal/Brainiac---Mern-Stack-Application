import userSchedule from "../model/schedule.js";

export const getTasks = async (req, res) => {
  try {
    const Data = await userSchedule.find({user: req.user.id});
    res.status(200).json(Data);
    
  } catch (error) {
    res.status(404).json({ "message": error.message });
  }
};

export const addTasks = async (req, res) => {
  const {task,weekDay,iconIndex} = req.body;
  // const newTask = new userSchedule(data);

  try {
    const taskNew=new userSchedule({
      task,weekDay,iconIndex,user:req.user.id,
    })
    
    await taskNew.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(404).json({ "message": error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    let task = await userSchedule.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Not found");
    }
    task = await userSchedule.findByIdAndDelete(req.params.id);
    res.json({ msg: "task deleted" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


export const updateTaskStatus=async(req,res)=>{
    try {
        let updateTask=await userSchedule.findById(req.params.id);
        if(!updateTask){
            return res.status(404).send("Not found");
        }
        updateTask=await userSchedule.findByIdAndUpdate(req.params.id,{status:true},{new:true})
        res.json(updateTask);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}


