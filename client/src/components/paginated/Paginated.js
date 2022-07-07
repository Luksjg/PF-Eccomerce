import React from "react"

export default function Paginated({allProducts,setCurrentPage}){
    const pageNumbers = [];
    
    for(let i=1; i<=Math.ceil(allProducts / 9); i++){
        pageNumbers.push(i);
    }
       
    return(
        <nav>
            <ul>
                {pageNumbers.length > 1  &&
                    pageNumbers.map(number => (
                        <li key={number}> 
                            <button onClick={() => setCurrentPage(number)}>{number}</button>
                        </li>
                    ))
                }     
            </ul>

        </nav>
    )
}