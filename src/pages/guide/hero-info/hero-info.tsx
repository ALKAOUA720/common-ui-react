import { HeroInfoT } from "@/types/types";
import styles from "./hero-info.less";

const HeroInfo: React.FC<{
  info: HeroInfoT
}> = ({ info }) => {
  return (
    <div className={styles['hero-info-box']}>
      <div className={styles['top-box']}>
        <img className={styles['hero-avatar']} src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${info.heroid}/${info.heroid}.jpg`} />
        <div className={styles['middle-box']}>
          <div>{info.heroName}</div>
          <div>职业：{info.heroJob}</div>
        </div>
      </div>
      {/* <div className={styles['bottom-box']}>
        <div className={styles['skill-intro-title']}>技能介绍</div>
        <div className={styles['skill-img-list']}>
          <img className={styles['skill-img']} src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${info.heroid}/${info.heroid}00.png`} />
          <img className={styles['skill-img']} src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${info.heroid}/${info.heroid}10.png`} />
          <img className={styles['skill-img']} src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${info.heroid}/${info.heroid}20.png`} />
          <img className={styles['skill-img']} src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${info.heroid}/${info.heroid}30.png`} />
        </div>
      </div> */}
    </div>
  );
};

export default HeroInfo;
