(function(){
     // Masonry
    //  if($("div").is(".set-masonry-js")){
    //     setTimeout(()=>{
    //         $('.set-masonry-js').masonry({
    //             // options
    //             itemSelector: '.blog-element',
    //             columnWidth: '.blog-element',
    //             gutter:30,
    //             percentPosition: true,
    //             horizontalOrder: true
    //         });
    //     },200)       
    // }

    let isMasonryActivate = document.querySelectorAll('.set-masonry-js').length > 0 ? true : false
    console.log(isMasonryActivate)
    if(isMasonryActivate){
        let msnry = new Masonry( '.set-masonry-js', {
            // options
            itemSelector: '.blog__element',
            columnWidth: '.blog__element',
            gutter:30,
            percentPosition: true,
            horizontalOrder: true
        })
    }
})()