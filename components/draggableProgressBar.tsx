import Image from "next/image";
import { Tooltip } from "./tooltip";
import { useSize } from "@/utils/useSize";
import { useCallback, useEffect, useRef, useState } from "react";


export function DraggableProgressBar({
    percentage, setPercentage,
    className = "", tooltipText
}: { className?: string, percentage: number, setPercentage: (n: number) => void, totalTickets: number, tooltipText?: string }) {
    const [isDragging, setIsDragging] = useState(false);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const updateProgress = useCallback((clientX: number) => {
        if (!progressBarRef.current) return;

        const rect = progressBarRef.current.getBoundingClientRect();
        const newPercentage = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));

        setPercentage(newPercentage < 5 ? 5 : newPercentage);
    }, []);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        setIsDragging(true);
        updateProgress(e.clientX);
    }, [updateProgress]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        updateProgress(e.clientX);
    }, [isDragging, updateProgress]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setIsDragging(true);
        updateProgress(e.touches[0].clientX);
    }, [updateProgress]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        updateProgress(e.touches[0].clientX);
    }, [isDragging, updateProgress]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Add global event listeners for mouse/touch events
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

    const size = useSize(true)

    return (
        <div className={`select-none ${className}`}>
            {/* Progress Bar Container */}
            <div className="relative mb-4">
                {/* Tick marks */}
                <div className="absolute top-0 bottom-0 mt-1 left-5 right-0 h-6 w-[95%] flex">
                    {Array.from({ length: size.lmd ? 80 : 170 }, (_, i) => (
                        <div
                            key={i}
                            className="flex-1 border-l my-auto border-[color:#6E6E6E] h-[60%]"
                            style={{ borderLeftWidth: '1.5px' }}
                        ></div>
                    ))}
                </div>
                <div
                    ref={progressBarRef}
                    className={`w-full absolute inset-0 rounded-lg h-8 overflow-hidden cursor-pointer ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                >
                    <div className="relative h-full">
                        {/* Progress Fill */}
                        <div
                            className="bg-gradient-to-r h-6 mt-1 rounded-lg border-[1px] border-[color:#8a8a8a] from-[#464646] to-[#94100f] transition-all duration-100 ease-out"
                            style={{ width: `${percentage}%` }}
                        >
                        </div>

                        {/* Invisible clickable overlay */}
                        <div className="absolute inset-0 z-10"></div>

                    </div>
                </div>

                <div className="absolute bottom-[-30px] flex flex-col items-center transition-all duration-100 ease-out" style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}>
                    <div className="relative flex flex-row">
                        {/* <div className=" absolute w-[50%] bg-[color:#323232] left-0 inverted-border-radius-l rounded-tl-lg h3 text-transparent"></div> */}
                        {/* <div className="absolute top-0 right-0 left-0">dljfsjldjlsdfls</div> */}
                        <Tooltip width={150} height={70}> <div className="text-center mt-2">{tooltipText}</div></Tooltip>
                    </div>

                    <div className="bg-white h-8 w-5 rounded-full flex flex-row items-center justify-center">
                        <Image src={'/icons/dragHandle.svg'} alt="" width={10} height={10} />
                    </div>
                </div>
            </div>


        </div>
    );
}