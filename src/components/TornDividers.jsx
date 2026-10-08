import React from 'react';

/**
 * Organic Torn Paper / Brush Edge Cutout Dividers
 * Gives the authentic rustic paper & foliage transition seen in the reference design.
 */

export function TornEdgeBottom({ color = "#FAF8F5", className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`} style={{ height: '56px' }}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 
             C45,28 75,5 120,38 
             C165,65 210,12 260,45 
             C310,75 350,22 410,52 
             C470,80 520,30 580,62 
             C640,88 680,25 740,58 
             C800,85 850,20 910,50 
             C970,78 1020,35 1080,65 
             C1140,90 1190,15 1250,48 
             C1310,76 1370,25 1440,55 
             L1440,80 L0,80 Z"
          fill={color}
        />
        {/* Layered micro-roughness for organic rustic look */}
        <path
          d="M0,15 
             C50,38 90,18 140,42 
             C190,62 230,22 290,48 
             C350,70 390,32 450,58 
             C510,82 560,35 620,68 
             C680,92 730,30 790,62 
             C850,88 900,32 960,58 
             C1020,82 1070,38 1130,68 
             C1190,92 1240,25 1300,52 
             C1360,78 1400,35 1440,60 
             L1440,80 L0,80 Z"
          fill={color}
          opacity="0.75"
        />
      </svg>
    </div>
  );
}

export function TornEdgeTop({ color = "#1E3D2C", className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`} style={{ height: '56px' }}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block rotate-180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 
             C45,28 75,5 120,38 
             C165,65 210,12 260,45 
             C310,75 350,22 410,52 
             C470,80 520,30 580,62 
             C640,88 680,25 740,58 
             C800,85 850,20 910,50 
             C970,78 1020,35 1080,65 
             C1140,90 1190,15 1250,48 
             C1310,76 1370,25 1440,55 
             L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function FoliageBrushDivider({ color = "#244738", className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`} style={{ height: '64px' }}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Jagged / Foliage silhouette line */}
        <path
          d="M0,40 
             Q30,10 60,35 T120,25 T180,45 T240,15 T300,40 T360,20 T420,50 T480,15 T540,40 T600,20 T660,48 T720,10 T780,42 T840,18 T900,48 T960,15 T1020,42 T1080,22 T1140,52 T1200,18 T1260,45 T1320,20 T1380,48 T1440,30 
             L1440,90 L0,90 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
