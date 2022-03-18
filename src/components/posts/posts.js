import React from "react"
import Post from "./post/post"
import {useSelector } from "react-redux"
import useStyle from "./Style"
import {Grid ,CircularProgress} from "@material-ui/core"

const Posts=({setCurrentId}) =>{
    const {posts,isLoading} = useSelector((state) => state.posts)
   
    const classes=useStyle()

    if(!posts.length && !isLoading) return 'No Posts';
    
    return (
        isLoading?<CircularProgress/>:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid>
        )
    )
}

export default Posts
