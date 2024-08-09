import React,{useRef} from 'react'
import './Csr.css'

const Csr = () => {
    const slider=useRef();
    let tx=0;
    const slideforward =()=>{
        if(tx>-60){
            tx=tx-20;
        }
        slider.current.style.transform=`translateX(${tx}%)`;


    }
    const slidebackward=()=>{
        if(tx<0){
            tx=tx+20;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

    }
  return (
    <div className='testimonials'>
        <img src="https://thumbs.dreamstime.com/z/right-arrow-vector-icon-black-symbol-navigation-163301987.jpg" className='next-btn' onClick={slideforward}/>
        <img src="https://thumbs.dreamstime.com/b/arrow-icon-vector-left-sign-symbol-your-web-site-design-logo-app-ui-illustration-176803458.jpg" className='back-btn' onClick={slidebackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src="https://i0.wp.com/drishtifoundation.org/wp-content/uploads/2022/12/DKG-jpeg.webp?resize=768%2C770&ssl=1"/>
                            <div>
                                <h3>
                                Dinesh Kr. Gautam (Managing Trustee)

                                </h3>

                            </div>
                           
                        </div>
                        <div>
                                <p>
                                Dinesh Kr Gautam, Founder of Drishti Foundation Trust, is a catalyst for transformative change. With a deep-rooted commitment to community welfare, he spearheads initiatives in education, healthcare, and sustainable development. Dinesh’s visionary leadership and strategic acumen drive impactful projects, fostering empowerment and inclusivity. Leveraging his expertise in Social Development Sector, his personality illuminates his journey of social innovation and advocacy, optimizing visibility and engagement. Through his relentless dedication, Dinesh Kr Gautam ignites hope and inspires collective action, creating a brighter, more equitable future for all.”. 



                                </p>
                            </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src="https://i0.wp.com/drishtifoundation.org/wp-content/uploads/2021/02/Jangmu.jpg?w=800&ssl=1"/>
                            <div>
                                <h3>
                                Jangmu Sherpa (Secretary)

                                </h3>

                            </div>
                         
                        </div>
                        <div>
                                <p>
                                Ms. Jangmu Sherpa, Trustee of Drishti Foundation Trust, epitomises philanthropy and social activism with a global perspective. Her multifaceted experience spans diverse sectors in India and beyond. A dedicated advocate for women’s empowerment and environmental conservation, she champions the cause in Northeast India. Through Drishti Foundation Trust, Ms. Sherpa educates and empowers orphaned girls and women, while raising awareness about their rights. Her SEO-friendly profile highlights her impactful work, driving visibility and engagement. Ms. Jangmu Sherpa’s unwavering commitment to social change resonates in her endeavours, inspiring others to join in creating a more equitable and sustainable world. 



                                </p>
                            </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src="https://i0.wp.com/drishtifoundation.org/wp-content/uploads/2021/02/DSC_3655.001-1.jpg?w=450&ssl=1"/>
                            <div>
                                <h3>
                                Brahmchari  Anantbodh Chaitanya (Trustee)

                                </h3>

                            </div>
                            
                        </div>
                        <div>
                                <p>
                                Swami Anantbodh, an ascetic Brahmachari, embodies boundless wisdom and enlightenment. Dedicated to serving humanity, he channels his profound knowledge towards guiding the lost onto the path of righteousness. As a stalwart figure, Swami Anantbodh infuses Drishti Foundation Trust’s social causes with unparalleled passion and flair. His expertise, coupled with a gentle demeanour and exceptional man-management skills, amplifies the impact of the trust’s initiatives.Swami Anantbodh shines as a beacon of enlightenment, inspiring others to join in the noble pursuit of uplifting the marginalised and fostering a more compassionate society.


                                </p>
                            </div>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Csr
