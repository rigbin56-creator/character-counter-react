import { ProgressBar } from "./ProgressBar"

const LetterDensity =  ({ sortLetters }) => {
    return (
        <>
        <section>
        <h2>Cantidad de letras</h2>
        <button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos" : "Ver todos"}</button>
        <ul>
            {
             sortLetters.splice(0, 5).map(letter => <ProgressBar key={letter.letteName} letter={letter}/>)
            }
        </ul>
    </section>
        </>
    )
}

// const LetterDensity =  ({ sortLetters }) => {
//     return(
//         <>
//         <section>
//         <h2>Cantidad de letras</h2>
//         <button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos" : "Ver todos"}</button>
//         <ul>
//             {
//              sortLetters.splice(0, 5).map(letter => <ProgressBar key={letter.letteName} letter={letter}/>)
//             }
//         </ul>
//     </section>
//         </>
//     )
// }

// const LetterDensity = ({ sortLetters }) => {

//   return (

//     <section>

//       <h2>Cantidad de letras</h2>

//       <article>

//         <ul>

//           {

//             sortLetters.slice(0, 5).map(letter => (

//               <li key={letter.letterName}>

//                 <span>{letter.letterName.toUpperCase()}</span>

//                 <meter min="0" max="100" value={letter.percentage}></meter>

//                 <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>

//               </li>))

//           }

//         </ul>

//       </article>

//       <details>

//         <summary>See more</summary>

//         <ul className="meter-list">

//           {

//             sortLetters.slice(5, sortLetters.length).map(letter => (

//               <li key={letter.letterName}>

//                 <span>{letter.letterName.toUpperCase()}</span>

//                 <meter min="0" max="100" value={letter.percentage}></meter>

//                 <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>

//               </li>

//             ))

//           }

//         </ul>

//       </details>

//     </section>

//   )

// }


export { LetterDensity }