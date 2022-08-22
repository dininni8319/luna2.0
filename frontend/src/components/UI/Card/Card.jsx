import style from './Card.module.css';

const Card = ( { restaurant, id } ) => {
     console.log(restaurant);
     return ( <section className={style["card-container"]}>
              <div className={style["card-header"]}></div>
              <div className={style['card-row']}>
                <div>
                  <h3>{ restaurant?.name }</h3>
                  {/* <p>{ restaurant?.description }</p> */}
                </div>
                <ul>
                  {/* <li>
                    { restaurant?.address }
                  </li> */}
                  <li>
                    { restaurant?.street }
                  </li>
                 {/* <img src={restauran} alt="" width='150px' height='200px'/> */}
                </ul>
              </div>
            </section>
     );
}
 
export default Card;