exports.postEntry = async (req, res, next) => {
  try {
    console.log("Post Router working");
    res.status(200).json({
      message: "Post Router Working"
    });
  } catch (error) {
    console.log("Post Router not working" + error);
    res.status(500).json({ error: "Post Router not working" });
  }
 };


 exports.billReminder = async () => {
  try {
  console.log('running a task every two minutes');
  } catch (error) {
    
  }
 }
