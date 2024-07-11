import styles from './styles.module.css'

import Lakers from '../../assets/images/Lakers.png'
import Bulls from '../../assets/images/Bulls.png'
import nba from '../../assets/images/nba.png'
export default function Banner() {
  return (
    <>
      <section className={styles.banner}> 
        <div className={styles.container_times}>
          <div>
            <img className={styles.nba_logo} src={nba} alt="nba" />
          </div>
          <div className={styles.times}>
            <div className={styles.time_1}>
              <div className={styles.time_1_logo}>
                <img src={Lakers} alt="lakers" />
              </div>
              <h5>Lakers</h5>
              <p>60%</p>
            </div>
            <div className={styles.time_2}>
              <div className={styles.time_2_logo}>
                <img src={Bulls} alt="bulls" />
              </div>
              <h5>Bulls</h5>
              <p>40%</p>
            </div>
          </div>
          <div className={styles.placar}>
            <h4>JOGO 5: LAK 3-1</h4>
          </div>
        </div>
      </section>
    </>
  )
}

