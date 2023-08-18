import React from 'react';
import './Placeholder.css';

const Placeholder = props => {
  const { height = 300, isUsageReport } = props;

  if(props.type === 'table') {
    return (
      <div className="linear-background" style={{height: `${height}px`}}>
        <div className="table-strip"></div>
        <div className="table-strip"></div>
        <div className="table-strip"></div>
        <div className="table-strip"></div>
        <div className="table-strip"></div>
        <div className="table-strip"></div>
          <div className="table-strip"></div>
          <div className="table-strip"></div>
          <div className="table-strip"></div>
          <div className="table-strip"></div>
          <div className="table-strip"></div>
      </div>
    )
  } else if (props.type === 'no-title') {
    return (
      <div className="linear-background" style={{height: `${height}px`}}></div>
    )
  } else if (props.type === 'table-chart') {
    return (
      <div className="linear-background" style={{height: `${height}px`}}>
        <div className="center-verticle"></div>
        <div className="horizontal-space"></div>
      </div>
    )
  } else if (props.type === 'overview-card' || props.type === 'overview-card-new') {
    const newStyle = props.type === 'overview-card-new' ? isUsageReport ? {width: '90%'} : {width: '18%'} : {};
    return (
      <div className="linear-background card-height" style={newStyle}>
        <div className="top-right1"></div>
        <div className="middle-strip1"></div>
        <div className="middle-strip2"></div>
        <div className="block1"></div>
        <div className="block2"></div>
      </div>
    )
  } else if (props.type === 'insight-header') {
    return (
      <div style={{padding: '14px 0px'}}>
      <div className="linear-background insight-header">
        <div className="insight-block1"></div>
        <div className="insight-block2"></div>
        <div className="insight-block3"></div>
        <div className="insight-block4"></div>
        <div className="insight-block5"></div>
        <div className="insight-block6"></div>
        <div className="insight-block7"></div>


      </div>
      </div>
    )
  }
  return (
    <div className="linear-background" style={{height: `${height}px`}}>
      {/*<div className="top-right"></div>*/}
      {/*<div className="middle-center"></div>*/}
      {/*<div className="inter-draw"></div>
      <div className="inter-crop"></div>
      <div className="inter-right--top"></div>
      <div className="inter-right--bottom"></div>*/}
    </div>
  )
}

export default React.memo(Placeholder);
