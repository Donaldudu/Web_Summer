
const Student=require("../Models/student")
const Instructor=require("../Models/instructor")


const signup_student=  async (req, res, next) => {
    const st=req.body;
    console.log(st)
    try {
        const student = new Student(st);
        const result = await student.save();
        let token;
        try {
          token = jwt.sign(
                          {username:username },
                          process.env.SecretKey,
                          { expiresIn: "1h" }
                          );
            } catch (err) {
                const error = new Error("Error! Something went wrong.");
                next(error);
            }
            res
            .status(201)
            .json({
                success: true,
                data: {
                    //rollNo:st.rollNo,
                    token: token
                },
            });
        } catch(err) {
            console.log("errrrrrrrrrrrr",err)
        }
        };




const signup_instructor= async (req, res, next) => {
    const it=req.body;
    console.log(it)
    try {
        const instructor = new Instructor(it);
        const result = await instructor.save();
        let token;
        try {
            token = jwt.sign(
                {Id: it.Id,instructorName :it.instructorName ,email: it.email },
                process.env.SecretKey,
                { expiresIn: "1h" }
                );
            } catch (err) {
                const error = new Error("Error! Something went wrong.");
                next(error);
            }
            res
            .status(201)
            .json({
                success: true,
                data: {
                    // rollNo:st.rollNo,
                    token: token
                },
            });
        } catch(err) {
            console.log("errrrrrrrrrrrr",err)
        }
        };


module.exports={signup_instructor,signup_student};