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
// export function GradientCircle(){
//     return(
//     <>
//         <motion.div className={styles.circle}/>
//     </>
//     )
// }

export function HexagonCluster() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.hexagonCluster}>
                <div className={styles.hexagonContainer}>
                    <HexGrid width={512} height={512}>
                        <Layout size={{ x: -24, y: 24 }} flat={true} spacing={1.1} viewBox="-50 -50 100 100" origin={{ x: 24, y: 24 }}>
                            <Hexagon q={0} r={0} s={0} />
                            <Hexagon q={0} r={-1} s={1} />
                            <Hexagon q={1} r={-1} s={0} />
                            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
                        </Layout>
                    </HexGrid>
                </div>
            </div>
        </div>
    );
}
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