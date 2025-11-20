import React from 'react'
import {cocktailLists, mockTailLists} from '../constants/index';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Cocktails = () => {
   useGSAP(()=>{
        const parallexTimeline = gsap.timeline(
            {
                trigger:'#cocktails',
                start : 'top 30',
                end: 'bottom 80'
            }
        );
        parallexTimeline.from('#c-left-leaf', {x:-100, y:100});        
   
        parallexTimeline.from('#c-right-leaf', {x:100, y:100});
    },[])
    return (
    <section id="cocktails" className="noisy">
        <img src="/images/cocktail-left-leaf.png" alt="left leaf" id="c-left-leaf"/>
         <img src="/images/cocktail-right-leaf.png" alt="right leaf" id="c-right-leaf"/>

        <div className ="list">
            <div className="popular">
                <h2> Most Popular</h2>
                <ul>
                    {cocktailLists.map((cocktail)=>{
                        return <li key={cocktail.name}> 
                            <div  className='md:me-28'>
                                <h3>{cocktail.name}</h3>
                                <p>{cocktail.country} |{cocktail.detail} </p>
                            </div> 
                            <span> -{cocktail.price}</span>
                         </li>
                    })}
                </ul>
            </div>
            <div className="loved">
                <h2> Most Loved</h2>
                <ul>
                    {mockTailLists.map((cocktail)=>{
                        return <li key={cocktail.name}> 
                            <div  className='md:me-28'>
                                <h3>{cocktail.name}</h3>
                                <p>{cocktail.country} |{cocktail.detail} </p>
                            </div> 
                            <span> -{cocktail.price}</span>
                         </li>
                    })}
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Cocktails