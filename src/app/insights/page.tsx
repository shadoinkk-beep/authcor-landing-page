import Footer3 from "@/components/footernew/Footer3";
import Link from "next/link";
import { FC } from "react";



const news = [
    {img:"consultancy.jpg","title":"How Expert Consulting Services Can Transform Your Data Center",rt:"5 min",date:"13 Nov 2024",url:"https://www.linkedin.com/feed/update/urn:li:activity:7252702408558981120"},
    {img:"reducing_carbon.jpg","title":"Reducing Carbon Footprint with Sustainable Data Center Solutions.",rt:"5 min",date:"29 Aug 2024",url:"https://www.linkedin.com/feed/update/urn:li:activity:7252883641658155008"},
    {img:"scalability.jpg","title":"The Benefits of Scalability in Data Center Infrastructure",rt:"5 min",date:"30 Aug 2024",url:"https://www.linkedin.com/feed/update/urn:li:activity:7252611830408228864/"},
    {img:"strategies.jpg","title":"Strategies to Improve Data Center Efficiency and Maximize ROI",rt:"5 min",date:"13 Sep 2024",url:"https://www.linkedin.com/feed/update/urn:li:activity:7251660544137408512/"},
    {img:"optimizing.jpg","title":"Optimizing Telecom and CDN Networks with Managed Data Center Services",rt:"5 min",date:"20 Sep 2024",url:"https://www.linkedin.com/feed/update/urn:li:activity:7252570281448202241"},
]

const BlogPage:FC = ( ) =>{

    return<> <section className="text-black container px-5 py-12 md:mx-auto"  >
        <div className="py-16 pb-8 grid items-center text-center">
            <h1 className="text-4xl font-bold" >Insights</h1>
            <p>Take a deeper experience from AuthCor Technologies and industry insights. </p>
        </div>

        <div className="px-12">
            <img className="object-fill aspect-[1170/500] w-full max-h-[60vh]" src={`assests/blogs/${news[0].img}`} alt="red"/> 

            <div className="p-6">
                <Link href={news[0].url} target="_blank" className="text-2xl hover:underline font-bold mb-2">{news[0].title}</Link>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>{news[0].rt}</span>
                    <span className="mx-2">•</span>
                    <span>{news[0].date}</span>
                </div>
            </div>


        </div>


        <div className="container px-5  md:mx-auto">



            {news.slice(1,5).map((news_)=> <BlogL key={news_.title} blog={news_}/> )}
            <hr className="border-2 border-gray"/>







        </div>

    </section>
    <Footer3/>
    </>
}

interface Blog {
    blog : {img:string,url:string,rt:string,title:string,date:string}
}

const BlogL:FC<Blog> = ({blog})=>{

    return(<>
                <hr className="border-2 border-gray"/>
                <div className="grid md:flex  py-10 items-center">

                <img src={`assests/blogs/${blog.img}`} className="object-cover max-w-md aspect-[401/166]" alt={blog.img}/>
                <div className="p-6">
                <Link href={blog.url} target="_blank" className="text-2xl hover:underline font-semibold mb-2"> {blog.title} </Link>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>{blog.rt}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                </div>
            </div>

            </div>


        
    </>)

}


export default BlogPage;