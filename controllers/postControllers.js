const posts = require('../data/postData.js')

// for get the single data


const getAllData = (req, res) => {
    try {
        res.status(200).json({
            msg: `Post Data Added Successfully !!!`,
            success: true,
            body: posts

        })

    } catch (err) {
        res.status(500).json({
            msg: `something went wrong!!!`,
            success: false,
            error: err.msg
        })
    }
}


//for get single data 

const getSinglePost = (req, res) => {
    try {
        let postId= req.params.id

        let post = posts.find(p => p.id === postId)

        if(!post){
            return res.status(404).json({
                success: false,
                msg: "data not found !!!"
            })
        }

        res.status(200).json({
            msg: `Post Single Data fetched Successfully !!!`,
            success: true,
            body: post

        })

    } catch (err) {
        res.status(500).j({
            msg: `something went wrong !!!`,
            success: false,
            error: err.msg

        })
    }
}


// for create new 

const createpost = (req, res) => {

    try {

        let newpost = {

            userId: req.body.userId,
            id: Date.now().toString(),
            title: req.body.title,
            body: req.body.body

        }

        posts.push(newpost)


        res.status(201).json({
            success: true,
            body: newpost,
            msg: "post data added successfully !!!"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "something went wrong !!!",
            err: err.msg
        })
    }
}

// for update post 

const updatePost = (req, res) =>{


    try {

        let updatepost = posts.find(b => b.id === req.params.id);

        if (!updatepost) {
            return res.status(404).json({
                success: false,
                msg: "post data not found !!!"
            })
        }

        updatepost.userId = req.body.userId;
        updatepost.title = req.body.title;
        updatepost.body = req.body.body;

        res.status(200).json({
            success: true,
            body: updatepost,
            msg: "post updated successfully !!!"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "something went wrong !!!",
            error: err.msg
        })
    }

}

//  for delete 


const deletePost =(req, res) =>{



 try {
        
        let getindex = posts.findIndex(d => d.id == req.params.id)

        if (getindex === -1) {
            
            return res.status(404).json({
                success:false,
                msg:"post not found !!!"
            })
        }

        let deletepost = posts.splice(getindex , 1)

        res.status(200).json({
            success:true,
            body:deletepost[0],
            msg:"post deleted successfully !!!"
        })


    } catch (err) {
        res.status(500).json({
            success:false,
            msg:"something went wrong !!!",
            error: err.msg
        })
    }

}

module.exports = {
    getAllData,
    getSinglePost,
    createpost,
    updatePost,
    deletePost

}
