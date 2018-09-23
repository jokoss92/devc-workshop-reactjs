import React from 'react'
import SearchBar from '../components/SearchBar';
import BlogList from '../components/BlogList';
const link= "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component{
    constructor() {
        super ()

        this.state ={
            blogs:[],
            blogsFiltered:[]
        }

    }

    handleTypeSearch = event =>{
        const blogsFiltered = this.state.blogs.filter((blog) => {
            return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        this.setState({
            blogsFiltered: blogsFiltered
        })
        //console.log(this.state.search);
    }

    componentDidMount(){
        //setTimeout(()=>{
        this.handleGetBlogs()
    }

    handleGetBlogs = event =>{
       fetch(link)
       .then(res=> res.json())
       .then(res=>this.setState({blogs:res, blogsFiltered:res,loading:false}))
    }
    render () {

        if(this.state.loading){
            return(
                <h1>Loading</h1>
            )
        }

        console.log(this.state.blogsFiltered)

        return (
            <div style={style.listStyles}>
            <SearchBar 
            onChangeSearch={this.handleTypeSearch}
            />
            {this.state.blogsFiltered.map((blog, index)=>(
            <BlogList
            key={index} 
            title={blog.title} 
            content={blog.content}
            author={blog.author}
            created_at={blog.created_at}
            />
            ))}
            </div>
        )
    }
}

const style = {
    listStyles:{
        margin: 10,
        backgroundColor : "gray",
        padding: 10,
        borderColor: "black"
       
    }

}

export default App