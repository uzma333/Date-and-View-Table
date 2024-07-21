import React, { useState } from 'react'
import styles from "./Table.module.css"


let customTableData=
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function Table() {
   const[data,setData]=useState(customTableData)

    const handleDate=()=>{
        const sortedData=[...data].sort((a,b)=>{
            const dateComparision=new Date(b.date)-new Date(a.date)
            if(dateComparision!==0){
                return dateComparision;
            }
            return b.views-a.views
        })
        setData(sortedData)


    }

    const handleViewAndArticle=()=>{
        const sortedViews=[...data].sort((a,b)=>{
            const viewsComparision=b.views-a.views;
            if(viewsComparision!==0){
                return viewsComparision;
            }
            return new Date(b.date)-new Date(a.date)
        })
        setData(sortedViews)

    }

  return (
    <div>
        <div className={styles.heading}>
            <h1>Date and Views Table</h1>
        </div>
        <div className={styles.table}>
         <button onClick={handleDate}> Sort by Date</button>
         <button onClick={handleViewAndArticle}>Sort by Views</button>
         <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>View</th>
                    <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.views}</td>
                        <td>{item.article}</td>

                    </tr>
                ))}
            </tbody>

         </table>
         
        </div>
    </div>
  )
}

export default Table;