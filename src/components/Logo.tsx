import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ className, size = 100 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 2481 3508"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
            className={className}
            role="img"
            aria-label="Elternverein HTL Mödling Logo"
        >
            <title>Elternverein HTL Mödling Logo</title>
            <g transform="matrix(4.16667,0,0,4.16667,0,2396.62)">
                <rect x="57.758" y="25.857" width="127.667" height="215.018" fill="currentColor" />
            </g>
            <g transform="matrix(4.16667,0,0,4.16667,0,2396.62)">
                <rect x="232.46" y="25.857" width="127.667" height="215.018" fill="currentColor" />
            </g>
            <g transform="matrix(4.16667,0,0,4.16667,0,2396.62)">
                <rect x="409.851" y="25.857" width="127.667" height="215.018" fill="currentColor" />
            </g>
            <g transform="matrix(4.16667,0,0,4.16667,0,1014.55)">
                <rect x="57.758" y="236.603" width="479.76" height="125.221" fill="currentColor" />
            </g>
            <g transform="matrix(4.16667,0,0,4.16667,0,132.608)">
                <rect x="57.758" y="347.48" width="215.018" height="115.134" fill="currentColor" />
            </g>
            <g transform="matrix(4.16667,0,0,4.16667,0,132.608)">
                <rect x="322.499" y="347.48" width="215.018" height="115.134" fill="currentColor" />
            </g>
            <g transform="matrix(0,-1,1,0,182.895,1149.39)">
                <g transform="matrix(0.933888,0,0,1,-23.9962,0)">
                    <text x="-362.964px" y="178.454px" style={{ fontFamily: "'Helvetica'", fontSize: '168.27px', fill: 'currentColor' }}>
                        S<tspan x="-263.139px -163.314px -44.839px 64.271px 164.095px 282.571px 391.68px 491.505px" y="178.454px">PONSORED</tspan>
                    </text>
                </g>
            </g>
            <g transform="matrix(1,0,0,1,386.307,474.811)">
                <g transform="matrix(1.04184,0,0,1,-5.10464,0)">
                    <text x="121.992px" y="597.789px" style={{ fontFamily: "'Helvetica'", fontSize: '624.366px', fill: 'currentColor' }}>
                        E<tspan x="554.083px 708.441px 897.554px 1260.44px 1484px" y="597.789px">ltern</tspan>
                    </text>
                </g>
                <g transform="matrix(1.04184,0,0,1,-6.86173,0)">
                    <text x="163.983px" y="1026.28px" style={{ fontFamily: "'Helvetica'", fontSize: '597.068px', fill: 'currentColor' }}>
                        v<tspan x="470.333px 810.209px 1016.85px 1356.73px 1497.19px" y="1026.28px">erein</tspan>
                    </text>
                </g>
            </g>
            <g transform="matrix(0,-1,1,0,316.029,1154.67)">
                <g transform="matrix(0.933888,0,0,1,-24.1067,0)">
                    <text x="-364.634px" y="220.96px" style={{ fontFamily: "'Helvetica'", fontSize: '168.917px', fill: 'currentColor' }}>
                        B<tspan x="-255.358px" y="220.96px">Y</tspan>
                    </text>
                </g>
            </g>
        </svg>
    );
};

export default Logo;
