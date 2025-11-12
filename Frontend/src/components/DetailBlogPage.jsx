export function DetailBlogPage(){
    return (
        <>
            <div id="variation-3" className="variation  zen-layout">
          <div className="max-w-4xl mx-auto py-2">
            {/* <div className="text-center mb-16">
        <h1 id="zen-title" className="text-5xl font-thin text-gray-800 mb-8 tracking-wide">Premium Wireless Headphones</h1>
        <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
        <p id="zen-slogan" className="text-lg font-light text-gray-600 max-w-lg mx-auto">Experience crystal-clear audio like never before</p>
        </div> */}
            <div className="product-image h-72 mb-8 mx-auto max-w-lg rounded-lg overflow-hidden">
              <img src={productDetails[0].imgsrc} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="text-center mb-12">
              <span id="zen-price" className="text-5xl font-thin text-gray-800 me-3">
                {productDetails[0].title}
              </span>
              <span id="zen-price" className="text-2xl font-thin text-gray-800">
                ₹{productDetails[0].price}
              </span>
              <div className="mt-4">
                <span className="text-yellow-400">★★★★★</span>{" "}
                <span className="text-sm font-light text-gray-500 ml-2">(4.8)</span>
              </div>
            </div>
            <div className="max-w-2xl mx-auto text-center mb-5">
              <p
                id="zen-description"
                className="text-lg font-light text-gray-600 leading-relaxed"
              >
                {productDetails[0].slogan}
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              <button className="px-12 py-4 border border-gray-800 text-gray-800 font-light hover:bg-gray-800 hover:text-white transition-all duration-500">
                Add to Cart
              </button>{" "}
              <button className="px-12 py-4 text-gray-600 font-light hover:text-gray-800 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        </>
    )
}