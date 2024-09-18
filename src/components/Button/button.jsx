import React from 'react';
import styles from './button.module.scss'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';



export function DownButton(){
    let clickScroll = () =>{
    window.scrollTo({
        top: window.screen.height/1.65,
        behavior: "smooth",
    });
}
        

    return(
    <div className={styles.container} onClick={clickScroll}>
        <h4>Let's Begin</h4>
    </div>
    )
}
export function GradientCircle(){
    return(
    <>
        <div className={styles.circle}/>
    </>
    )
}

// export function HexagonCluster() {
//     return (
//         <div className={styles.pageContainer}>
//             <svg className={styles.hexagonCluster} width="640" height="640">
//                 <defs>
//                     <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" style={{ stopColor: `#2B6DD0`, stopOpacity: 1 }} />
//                         <stop offset="100%" style={{ stopColor: '#081fa1', stopOpacity: 1 }} />
//                     </linearGradient>
//                 </defs>
//                 <HexGrid width={640} height={640}>
//                     <Layout
//                         size={{ x: -24, y: 24 }}
//                         flat={true}
//                         spacing={1.1}
//                         viewBox="-50 -50 100 100"
//                         origin={{ x: 24, y: 24 }}
//                     >
//                         <g fill="url(#hexGradient)">
//                             <Hexagon q={0} r={0} s={0} />
//                             <Hexagon q={0} r={-1} s={1} />
//                             <Hexagon q={1} r={-1} s={0} />
//                         </g>
//                         <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
//                     </Layout>
//                 </HexGrid>
//             </svg>
//         </div>
//     );
// }
export function ProjectButton(){
    return(
    <div className={styles.projectButtonContainer}>
        <h4>Read about it</h4>
    </div>
    )
}


export const Tag = (item) => (
    <div className={styles.tagContainer}>
        <h4>{item.tagTitle}</h4>
    </div>
);


export function Spacer(item){
    return(
    <div className={styles.spaceContainer}>
        <div className={styles.spacer} style={{width: item.width}}/>
    </div>
    )
}