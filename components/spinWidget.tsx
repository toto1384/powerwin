import Image from "next/image";
import { useRef, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

// Helper to convert a 0-100 value to the internal angle format
export const valueToAngle = (v: number) => {
    const angleRad = (v / 100) * 2 * Math.PI - Math.PI / 2;
    // Normalize to the -PI to PI range used by atan2
    return angleRad <= -Math.PI ? angleRad + 2 * Math.PI : angleRad;
};

// Helper to convert an internal angle to a 0-100 value
export const angleToValue = (a: number) => {
    // Shift angle so 0 is at the top, and normalize to [0, 2PI]
    const normalizedAngle = (a + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI);
    // Convert radians to a 0-100 scale and round it
    const value = Math.round((normalizedAngle / (2 * Math.PI)) * 10000) / 100;
    return value === 100 ? 0 : value; // Handle wraparound from 100 back to 0
};

// SVG for the pointer icon
const PointerIcon = () => (
    <svg width="47" className="rotate-[53deg]" height="45" viewBox="0 0 63 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_81_4684)">
            <path d="M43.407 41.6946C43.6326 41.6125 43.837 41.481 44.0056 41.3094C44.1743 41.1378 44.303 40.9303 44.3826 40.7017C44.4623 40.4731 44.4909 40.229 44.4665 39.9867C44.4422 39.7444 44.3653 39.5098 44.2415 39.2997L31.1657 15.6118C30.4959 14.4766 28.8569 14.5283 28.2865 15.7028L25.2331 21.7296L21.4397 18.8977C19.2581 17.2693 17.0702 17.5921 15.4848 19.7774C13.8993 21.9627 14.2458 24.178 16.4273 25.8065L20.2073 28.6279L15.5121 33.3102C14.5761 34.212 15.0146 35.8151 16.2817 36.1264L42.4674 41.7453C42.7799 41.8217 43.1064 41.8041 43.407 41.6946Z" fill="white" />
        </g>
        <defs>
            <filter id="filter0_d_81_4684" x="0.00195312" y="0.290283" width="62.9727" height="60.0017" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_81_4684" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_81_4684" result="shape" />
            </filter>
        </defs>
    </svg>

);


export function SpinWidget({ angleEnd, angleStart, setAngleEnd, setAngleStart }: { angleStart: number, setAngleStart: (n: number) => void, angleEnd: number, setAngleEnd: (n: number) => void }) {

    const radius = 175
    // Animation duration in seconds
    const spinDuration = 7;


    // --- State ---
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<"WIN" | "LOSE" | null>(null);


    // Style for the rotating pointer container
    const pointerContainerStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: `transform ${spinDuration}s`,
        transitionTimingFunction: 'cubic-bezier(0.32, 1, 0.58, 0.99)',//(0.35, 0.7, 0.45, 0.8)
        width: radius * 2 + 45, height: radius * 2 + 45
    };

    let comparePoints: number[][] = []

    if (angleToValue(angleEnd) < angleToValue(angleStart)) {
        comparePoints = [[angleToValue(angleEnd), 0], [99, angleToValue(angleStart)]]
    } else {
        comparePoints = [[angleToValue(angleEnd), angleToValue(angleStart)]]
    }


    // --- Spin Logic ---
    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setResult(null);

        // Calculate a random stop angle
        const randomAngle = Math.random() * 360;

        // Add multiple full rotations for a better spinning effect
        const fullRotations = 4; // 4 to 7 full spins
        const newRotation = rotation + (fullRotations * 360) + randomAngle;

        setRotation(newRotation);



        // Determine the result after the animation ends
        setTimeout(() => {
            setIsSpinning(false);

            const finalAngle = (newRotation % 360) / 3.6;

            console.log("🚀 ~ setTimeout ~ finalAngle:", finalAngle)

            // The win zone is from 0 to winThreshold degrees (at the top)
            if (comparePoints.map(i => finalAngle < i[0] && finalAngle > i[1]).includes(true)) {
                setResult('WIN');
            } else {
                setResult('LOSE');
            }
        }, spinDuration * 1000); // Match the CSS transition duration
    };
    const currentSize = (angleToValue(angleEnd) < angleToValue(angleStart) ? angleToValue(angleEnd) + 100 : angleToValue(angleEnd)) - angleToValue(angleStart)

    return (
        <div className="flex flex-col items-center">

            {result == 'WIN' && <ConfettiExplosion />}

            {/* --- Wheel --- */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center mb-10">

                {/* The rotating container for the pointer */}
                <div className="absolute" style={pointerContainerStyle}>
                    {/* The pointer is positioned at the 'top' of the rotating container */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <PointerIcon />
                    </div>
                </div>
                <DraggableDotOnCircle radius={radius} angleEnd={angleEnd} angleStart={angleStart} setAngleEnd={setAngleEnd} setAngleStart={setAngleStart}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 my-auto h-fit text-center select-none">

                        {isSpinning && (
                            <span className="text-4xl text-gray-400 animate-pulse">Spinning...</span>
                        )}
                        {!isSpinning && result && (
                            <>
                                <p className="text-4xl  ">{currentSize.toFixed(2)}% </p>
                                {/* <span className={`text-6xl font-bold uppercase ${result === 'WIN' ? 'text-green-400' : 'text-red-500'}`}>{result}!</span> */}
                                <p className="text-gray-500 text-sm mt-1">Click Spin to play again</p>
                            </>
                        )}
                        {!isSpinning && !result && (
                            <>
                                <p className="text-4xl  ">{currentSize.toFixed(2)}% </p>
                                <span className="text-xl text-[color:#747474]">Winning Chance</span>
                            </>
                        )}


                    </div>
                </DraggableDotOnCircle>


            </div>

            {/* --- Spin Button --- */}
            <div className="p-[0.8px] w-fit bg-gradient-to-b from-white to-[#3d3d3d] rounded-xl">
                <button
                    onClick={handleSpin}
                    disabled={isSpinning}
                    className=" w-fit bg-[color:#3d3d3d] group cursor-pointer transform transition-all duration-200 disabled:bg-[color:#940f0d] disabled:cursor-not-allowed disabled:scale-100 rounded-xl flex flex-row items-center"
                >
                    <Image src={'/icons/spin.svg'} className="ml-7 mr-5" alt="" width={20} height={20} />
                    <span>{isSpinning ? 'Spinning...' : 'Demo Spin'}</span>
                    <div className="group-enabled:bg-gradient-to-r aspect-square group-disabled:bg-[color:#940f0d]   from-[#353535] to-[#232323] h-full rounded-xl w-fit ml-4 pt-2 pb-2 px-[18px] border-l-[0.5px] border-b-[0.5px] border-white">1</div>
                </button>

            </div>
        </div>
    );


}


export function DraggableDotOnCircle({ children, radius, angleEnd, angleStart, setAngleEnd, setAngleStart }: {
    children: React.ReactNode, radius: number, angleStart: number, angleEnd: number,
    setAngleStart: (n: number) => void, setAngleEnd: (n: number) => void
}) {
    const circleRef = useRef(null);

    const width = 22

    return (
        <div className="flex flex-col select-none">
            <div className="flex items-center justify-center">
                <div
                    ref={circleRef}
                    className="relative"
                    style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                    }}
                >
                    <div style={{ borderWidth: width }} className="rounded-full border-[color:#3d3d3d] w-full h-full" />

                    {children}

                    <DotMovable
                        circleRef={circleRef} radius={radius} width={width}
                        angle={valueToAngle(
                            angleToValue(angleStart) +
                            (((angleToValue(angleEnd) < angleToValue(angleStart) ? angleToValue(angleEnd) + 100 : angleToValue(angleEnd)) - angleToValue(angleStart))) / 2
                        )}
                        setAngle={(angle) => {
                            const size = ((angleToValue(angleEnd) < angleToValue(angleStart) ? angleToValue(angleEnd) + 100 : angleToValue(angleEnd)) - angleToValue(angleStart))

                            console.log('size', size, angleToValue(angle), angleToValue(angleEnd), angleToValue(angleStart))


                            setAngleStart(valueToAngle(angleToValue(angle) - size / 2))

                            setAngleEnd(valueToAngle(angleToValue(angle) + size / 2))
                        }}
                        type={{ t: 'line', size: ((angleToValue(angleEnd) < angleToValue(angleStart) ? angleToValue(angleEnd) + 100 : angleToValue(angleEnd)) - angleToValue(angleStart)) }}
                    />

                    <DotMovable circleRef={circleRef} width={width} radius={radius} angle={angleStart} setAngle={(num) => {
                        console.log("🚀 ~ DraggableDotOnCircle ~ num:", num)

                        const size = ((angleToValue(angleEnd) < angleToValue(num) ? angleToValue(angleEnd) + 100 : angleToValue(angleEnd)) - angleToValue(num))

                        const max = angleToValue(angleEnd) - 80

                        const maxSanitized = valueToAngle(max < 0 ? max + 100 : max)


                        const min = angleToValue(angleEnd) - 5

                        const minSanitized = valueToAngle(min < 0 ? min + 100 : min)

                        setAngleStart(size > 80 ? maxSanitized : size < 5 ? minSanitized : num)
                    }} type={{ "t": 'dot', offset: 0.1 }} />
                    <DotMovable circleRef={circleRef} width={width} radius={radius} angle={angleEnd} setAngle={(num) => {
                        console.log("🚀 ~ DraggableDotOnCircle ~ num:", num)

                        const size = ((angleToValue(num) < angleToValue(angleStart) ? angleToValue(num) + 100 : angleToValue(num)) - angleToValue(angleStart))

                        const max = angleToValue(angleStart) + 80

                        const maxSanitized = valueToAngle(max > 100 ? max - 100 : max)

                        const min = angleToValue(angleStart) + 5

                        const minSanitized = valueToAngle(min < 0 ? min + 100 : min)

                        setAngleEnd(size > 80 ? maxSanitized : size < 5 ? minSanitized : num)
                    }} type={{ t: 'dot', offset: -0.1 }} />

                </div>
            </div>



        </div>
    );
}



function DotMovable({ circleRef, radius, angle, setAngle, type, width }: { width: number, radius: number, circleRef: any, angle: number, setAngle: (num: number) => void, type: { t: "dot", offset?: number } | { t: "line", size: number } }) {

    const dragOffsetRef = useRef(0);

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        if (!circleRef.current) return;

        // Prevents scrolling on mobile
        if (e.type === "touchmove") {
            e.preventDefault();
        }

        // Get coordinates from either mouse or touch event
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const rect = (circleRef.current as any).getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const mouseAngle = Math.atan2(dy, dx);

        // Apply the offset to maintain the relative position
        const newAngle = mouseAngle - dragOffsetRef.current;
        // const newAngle = Math.atan2(dy, dx);
        setAngle(newAngle);

        console.log("🚀 ~ DotMovable ~ dragOffset:", dragOffsetRef.current)

    } // Empty dependency array because it doesn't depend on component state

    const handleDragEnd = () => {

        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchmove", handleDragMove);
        window.removeEventListener("touchend", handleDragEnd);

        dragOffsetRef.current = 0; // Clear the offset
    }

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        if (!circleRef.current) return;

        // Get coordinates from either mouse or touch event
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const rect = (circleRef.current as any).getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const clickAngle = Math.atan2(dy, dx);

        // Store the offset between where they clicked and the current semicircle angle
        dragOffsetRef.current = clickAngle - angle;


        window.addEventListener("mousemove", handleDragMove);
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("touchmove", handleDragMove, { passive: false });
        window.addEventListener("touchend", handleDragEnd);
    }


    const getArcPath = (p: number): string => {
        // Convert percentage to a total angle in radians
        const arcAngleRad = (p / 100) * 2 * Math.PI;


        // Calculate start and end angles to center the arc
        const startAngleRad = -arcAngleRad / 2;
        const endAngleRad = arcAngleRad / 2;

        // Determine the (x, y) coordinates for the start and end of the arc
        const startX = radius + (radius + width) * Math.cos(startAngleRad);
        const startY = radius + (radius + width) * Math.sin(startAngleRad);

        const startX2 = radius + (radius - width) * Math.cos(startAngleRad);
        const startY2 = radius + (radius - width) * Math.sin(startAngleRad);

        const endX = radius + (radius + width) * Math.cos(endAngleRad);
        const endY = radius + (radius + width) * Math.sin(endAngleRad);

        const endX2 = radius + (radius - width) * Math.cos(endAngleRad);
        const endY2 = radius + (radius - width) * Math.sin(endAngleRad);

        // The 'large-arc-flag' is 1 if the arc is > 180 degrees, 0 otherwise
        const largeArcFlag = p > 50 ? 1 : 0;

        return [
            `M ${startX},${startY}`, // Draw a line to the start of the arc
            `A ${radius + width},${radius + width} 0 ${largeArcFlag} 1 ${endX},${endY}`, // Draw the arc

            `L ${endX2},${endY2}`, // Draw the arc
            `A ${radius - width},${radius - width} 0 ${largeArcFlag} 0 ${startX2},${startY2}`, // Draw the arc


            "Z", // Close the path to form a slice
        ].join(" ");

    };

    if (type.t == 'line') {
        const arcPath = getArcPath(type.size)
        const rotationDegrees = angle * (180 / Math.PI);
        return <div
            className="absolute touch-none select-none top-0 left-0 w-full h-full rounded-full cursor-pointer"
            style={{
                transform: `rotate(${rotationDegrees}deg)`,
                overflow: "hidden", // This clips the inner div into a semicircle
            }}

        >


            <svg
                viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                className="w-full h-full"
            >
                <path onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart} d={arcPath} fill="rgb(148,15,13)" />
            </svg>
        </div>

    } else if (type.t == 'dot') {
        const x = radius + (radius - width / 2) * Math.cos(angle + (type.offset ?? 0));
        const y = radius + (radius - width / 2) * Math.sin(angle + (type.offset ?? 0));

        return <div
            className="absolute touch-none select-none w-10 h-10 cursor-pointer "
            style={{
                left: `${x - 20}px`,
                top: `${y - 20}px`,
            }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
        ><div className="w-1.5 h-1.5 bg-white rounded-full m-auto mt-4"></div></div>
    }
}