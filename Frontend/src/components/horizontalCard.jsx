export function HorizontalCard({imgurl , blogId , category , title , description , createdAt }){
    return (
        <>
            <article className="group flex gap-4 my-2 overflow-hidden rounded-sm  border !border-slate-200 bg-card p-4 transition-colors hover:bg-card/80">
      {/* Image */}
      <div className="w-24 h-24 overflow-hidden rounded-md flex-shrink-0 bg-muted">
        <img
          src={imgurl}
          alt="Article preview"
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
      </div>

          
      {/* Content */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <a href="#" className="text-xs font-bold text-primary hover:underline mb-1">
          {category}
        </a>
        <h3 className="font-bold text-card-foreground transition-colors group-hover:text-primary truncate">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {description.slice(0,20)}
        </p>
        <p className="text-xs text-muted-foreground mt-2">{createdAt}</p>
      </div>
    </article>
        </>
    )
}