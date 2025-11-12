export function CategoryBlogCard({blogId , imgurl , category , title, description , createdAt}){
    return (
        <>
            <article className="card-hover m-2 p-2">
      <div className="overflow-hidden mb-4">
        <img src={imgurl} alt="Fashion" className="w-full h-56 object-cover image-zoom"/>
      </div>
      <div>
       <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{category}</p>
       <h2 className="text-xl font-medium text-gray-900 mb-2">{title}</h2>
       <p className="text-sm text-gray-600 mb-3">{description.slice(0,38)}</p>
       <p className="text-xs text-gray-400">{createdAt}</p>
      </div>
     </article>
        </>
    )
}