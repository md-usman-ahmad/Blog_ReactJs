export function CategoryBlogCard({blogId , imgurl , category , title, description , createdAt}){
    return (
        <>
            <article class="card-hover m-2">
      <div class="overflow-hidden mb-4">
        <img src={imgurl} alt="Fashion" class="w-full h-56 object-cover image-zoom"/>
      </div>
      <div>
       <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">{category}</p>
       <h2 class="text-xl font-medium text-gray-900 mb-2">{title}</h2>
       <p class="text-sm text-gray-600 mb-3">{description.slice(0,38)}</p>
       <p class="text-xs text-gray-400">{createdAt}</p>
      </div>
     </article>
        </>
    )
}