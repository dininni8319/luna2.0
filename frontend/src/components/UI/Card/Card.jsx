import style from './Card.module.css';

const Card = ( { restaurant, id } ) => {
     
     return ( <section className={style["card-container"]}>
              <div className={style["card-header"]}></div>
              <div className={style['card-row']}>
                <div className={style['card-detail']}>
                  <h4>{ restaurant?.name }</h4>
                  <p>{ restaurant?.street }</p>
                </div>

                 {/* <img src={restauran} alt="" width='150px' height='200px'/> */}
              
              </div>
            </section>
     );
}
 
export default Card;