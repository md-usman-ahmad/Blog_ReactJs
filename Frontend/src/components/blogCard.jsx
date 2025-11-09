
export function BlogCard({blogId , imgurl , category , title, createdAt , deleteBlog}){ 
    return (
        <>
            <article className="group p-2    overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-shadow w-1/4 mx-auto h-[40vh]">
      {/* Featured Image */}
      <div className="overflow-hidden h-34 bg-muted">
        <img
          src={imgurl}
          alt="City Center Bridge"
          className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        <div className="flex gap-2 mb-1">
          <a href="#" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors ">
            {category}
          </a>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Divider */}
        <div className="h-px bg-border mb-1" />

        {/* Date */}
        <p className="text-sm text-muted-foreground mb-3">{createdAt}</p>

        <div class="flex gap-3">
            <button class="px-4 py-2 text-black border  rounded-lg hover:bg-blue-700 hover:text-white transition-colors">
                Edit
            </button>
            <button 
            onClick={()=>{deleteBlog(blogId)}}  
            class="px-4 py-2 text-black border rounded-lg hover:bg-red-700 hover:text-white transition-colors">
                Delete
            </button>
        </div>
      </div>
    </article>

        </>
    )
}