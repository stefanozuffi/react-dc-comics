import style from './ProductCard.module.css'

export default function ProductCard(props) {
    return(
       <div className={style.card}>

          <img src={props.image} alt=""/>
          <h4>{props.title}</h4>

       </div>
    )
}