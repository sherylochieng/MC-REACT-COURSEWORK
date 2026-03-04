function WatchImage({image}){
return(
    <img src={image} alt={image} />
)
}
function WatchInfo({name,price}){
    return(
        <div>
            <h2>{name}</h2>
            <p>ksh{price}</p>
            
        </div>
    )
}

function WatchCard ({image,name,price}) {
    return(
        <div>
         <WatchImage Image={image}/>
         <WatchInfo name={name} price={price}/>

        </div>
    )
    
}

export default function WatchGallery (){
    const watches =[
        {id:1, name:"casio",price: 5000, img:''},
        {id:2, name:"Raga",price: 6000, img:''},
        {id:3, name:"Enkata",price: 7000, img:''},
        {id:4, name:"Swiss",price: 8000, img:''}

        ];

        return (
            <div>

                <h2>Our Watches</h2>
                <div>
                    {watches.map((watches)=>(
                        <WatchCard
                        key={watches.id}
                        image={watches.img}
                        name={watches.name}
                        price={watches.price}
                        />

                    ))}
                </div>
            </div>
    
)
}


// function WatchInfo({name, price}){
//      return (
//         <div>
//             <h2>{name}</h2>
//             <p>KSH {price}</p>
//         </div>
//      );
// }

// function WatchCard({ name, price}){
//     return (
//         <div>
            
//             <WatchInfo name = {name} price ={price} />
//         </div>
//     );
// }

// export default function WatchGallery (){
//     const watches = [
//         {id:1, name:"Casio", price: 5000},
//          {id:2, name:"Casio2", price: 6000},
//           {id:3, name:"Casio3", price: 8000}

//     ];
//     return (
//         <div>
//             <h2>OUR WATCHES</h2>
//             <div>
//                 {watches.map((watches) => (
//                     <WatchCard 
//                         key={watches.id}
//                         name={watches.name}
//                         price={watches.price}
//                         />
//                 )) }
//             </div>
//         </div>
//     )
// }

