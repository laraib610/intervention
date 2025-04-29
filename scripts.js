function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function activeBox()
{
    if ( $('.form label .box').hasClass('active') )
    {
        $('.form label .box').removeClass('active')
    }
    else
    {
        $('.form label .box').addClass('active')
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const values=[
        {
            heading:"UNDERSTAND",
            span:"WE",
            description:"Older adults want to play active and meaningful roles in their lives, including as part of a social network, a neighborhood, and a community. Service providers and policymakers must consider that a lack of sense of purpose can become problematic as people age.  Engaging them in leisure activities and volunteer work is important.",
            img_src:"/assets/image1.png",
        },
        {
            heading:"",
            span:"",
            description:"Older adults want to stay active and contribute to society in a reciprocal manner (meaning that they want to exchange their services and skills with others for the mutual benefit of the neighborhood or community). Qualitative and quantitative studies published from 2005 to 2016 examining the social needs of older adults were eligible for inclusion.",
            img_src:"/assets/image2.png",
        },
        {
            heading:"",
            description:"To stimulate social contacts, neighborhood initiatives can be developed. Social meeting places, such as pubs and churches can help to foster the development of close and peripheral relationships.",
            span:"",
            img_src:"/assets/image3.png",
            button:""
        },
    ];
        
        const valuesContainer = document.getElementById('service');
    
    // Generate the HTML structure dynamically using a for loop
    values.forEach((value, index) => {
        const cardHTML = `
                    <div class="card">
                           <div class="location_item m-2">
                                <div class="">
                                    <img loading="lazy"  src=${value.img_src}  width="100%" alt="" class="">
                                </div>
                                <div class="content">
                                    <h3 class="text-white poppins-semibold text-center"><span>${value.span}</span>${value.heading}</h3>
                                    <p class="text-white text-center">${value.description}</p>
                                    
                                </div>
                            </div> 
                        </div>
    
        `;
        valuesContainer.innerHTML += cardHTML;
    });
    });
