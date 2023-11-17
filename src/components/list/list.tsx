import React, { useEffect, useRef, useState } from 'react';
import { classNames, judgeClient, mergeOptions, throttle } from '@/utils/util';
import './list.less'
import loadingMoreIcon from "@/assets/loading.gif";

/**
 */

type ListPropsT = {
  isInitLoading?: boolean;
  isMoreLoading?: boolean;
  hasMore?: boolean;
  children?: React.ReactNode;
  onNearBottom?: () => void;
};

type ListItemPropsT = {
  children?: React.ReactNode;
};

/** 默认配置 */
const defaultProps = {
  isInitLoading: true,
  isMoreLoading: false,
  hasMore: true,
}

/** 全局配置 */
const configProps = {};


/** List 列表组件，配置项说明
 * |  属性  |  类型  |  说明  |  默认值  |
 * | :----: | :----: | :----: | :----: |
 */
const List: React.FC<ListPropsT> & {
  Item: typeof ListItem;
} = (props) => {
  const overflowBoxRef = useRef(null);
  const [overflowBoxDom, setOverflowBoxDom] = useState<HTMLDivElement | null>(null);
  const options: ListPropsT = mergeOptions(defaultProps, configProps, props);
  useEffect(() => {
    if (overflowBoxRef) {
      setOverflowBoxDom(overflowBoxRef.current);
    }
  }, [overflowBoxRef]);
  useEffect(() => {
    console.log(overflowBoxDom);
    if (overflowBoxDom) {
      overflowBoxDom.onscroll = throttle(() => {
        // 为了避免连续触发 scroll 事件导致的性能问题，我们可以设定一个 "scrollThreshold" 值，单位像素
        const scrollThreshold = 300;
        const scrollHeight = overflowBoxDom.scrollHeight;
        const scrollTop = overflowBoxDom.scrollTop;
        const clientHeight = overflowBoxDom.clientHeight;
        const isNeerBottom = scrollHeight - scrollTop - clientHeight <= scrollThreshold;
        if (isNeerBottom) {
          console.log('触底啦');
          if (options.onNearBottom) {
            options.onNearBottom();
          }
        }
      }, 500);
    }
  }, [overflowBoxDom]);
  return (
    <div
      className={classNames('list')}
      onClick={() => { }}
      ref={overflowBoxRef}
    >
      {props.children}
      <div className={'loading-more-box'}>
        {
          options.hasMore ? (
            <img className={'loading-more-icon'} src={loadingMoreIcon}></img>
          ) : (
            <div className={'no-more-text'}>—— 已经到底啦 ——</div>
          )
        }
      </div>
    </div>
  )
};

const ListItem: React.FC<ListItemPropsT> = (props) => {
  return (
    <div
      className={classNames('list-item')}
      onClick={() => { }}
    >
      {props.children}
    </div>
  )
};

List.Item = ListItem;

export default List;
