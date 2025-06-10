import GithubIcon from "@/assets/github.png";
import { componentsList } from "@/config/config";
import React, { useEffect, useState } from "react";
import Guide from "../guide/guide";
import css from "./index.less";

/** 主页 */
const Index: React.FC<{}> = (props) => {
  let resizeTimeout: NodeJS.Timeout | null = null;
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(screen.availWidth);
  }, []);
  const resizeThrottler = () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();
      }, 66);
    }
  };
  const actualResizeHandler = () => {
    setScreenWidth(screen.availWidth);
  };
  window.addEventListener("resize", resizeThrottler, false);
  const gotoGithub = () => {
    window.open("https://github.com/ALKAOUA720/common-ui-react");
  };
  return (
    <div className={css.index}>
      <div className={css["top-box"]}>
        <div className={css["index-h1"]}>Common UI - React</div>
        <img
          className={css["github-enter"]}
          src={GithubIcon}
          onClick={gotoGithub}
        ></img>
      </div>
      <div className={css["index-content"]}>
        {screenWidth < 800 ? (
          // 单列布局，适用于移动端
          <div className={css["index-line"]}>
            {componentsList.map((item, index) => (
              <Guide
                key={index}
                componentName={item.component}
                componentTitle={item.name}
              />
            ))}
          </div>
        ) : (
          // 双列瀑布流布局，适用于宽屏、移动端横屏、PC 端
          <>
            <div className={css["index-line"]}>
              {componentsList.map(
                (item, index) =>
                  index % 2 === 0 && (
                    <Guide
                      key={index}
                      componentName={item.component}
                      componentTitle={item.name}
                    />
                  )
              )}
            </div>
            <div className={css["index-line"]}>
              {componentsList.map(
                (item, index) =>
                  index % 2 !== 0 && (
                    <Guide
                      key={index}
                      componentName={item.component}
                      componentTitle={item.name}
                    />
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Index;
