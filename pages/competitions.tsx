import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";


const ITEMS = [
    { name: '$0.01', value: '$0.01', image: '/money/001.svg', rarity: 'common' },
    { name: '$5.00', value: '$5.00', image: '/money/5.svg', rarity: 'uncommon' },
    { name: '$10.00', value: '$10.00', image: '/money/10.svg', rarity: 'common' },
    { name: '$25.00', value: '$25.00', image: '/money/25.svg', rarity: 'rare' },
    { name: '$100.00', value: '$100.00', image: '/money/100.svg', rarity: 'rare' },
    { name: '$250.00', value: '$250.00', image: '/money/250.svg', rarity: 'epic' },
    { name: '$500.00', value: '$500.00', image: '/money/500.svg', rarity: 'epic' },
];

export default function CompetitionsComponent() {

    const winners = [
        {
            id: 1,
            username: "CristianoMaradona69",
            tickets: "23131131",
            prize: "$1000 - MacBook Air",
        },
        {
            id: 2,
            username: "CristianoMaradona69",
            tickets: "23123123",
            prize: "$1000 - MacBook Air",
        },
        {
            id: 3,
            username: "CristianoMaradona69",
            tickets: "21341421412",
            prize: "$1000 - MacBook Air",
        },
        {
            id: 4,
            username: "Hidden",
            tickets: "1234124124",
            prize: "$25 - Credit",
        },
        {
            id: 5,
            username: "KlausIohannis",
            tickets: "121312312",
            prize: "$100 - Cash",
        },
        {
            id: 6,
            username: "MichaelJackson1234567890",
            tickets: "12323123",
            prize: "$10 - Credit",
        }
    ];

    return <div className="flex flex-col items-center">

        <NavBar />
        <div className="border-l border-r border-white w-full p-2 md:p-9 md:pt-24 max-w-[1800px]" style={{
            background: "linear-gradient(162.58deg, #323232 0%, #000000 100%)"
        }}>

            <h1 className="text-3xl text-center md:text-5xl mt-7 mb-20 font-medium">Competitions</h1>
            <div className="grid grid-cols-2 gap-2">
                <Container disablePadding disableBgBr className="text-center text-2xl font-medium bg-gradient-to-b from-[#f3f3f3]/25 to-transparent py-5" rounded="rounded-lg" reverseBorder>
                    All raffles
                </Container>

                <Container disablePadding disableBgBr className="text-center text-2xl font-medium bg-gradient-to-b to-[#161616] from-transparent py-5" rounded="rounded-lg" reverseBorder>
                    Instant Win
                </Container>
            </div>
            <SpinAnimationComponent />

            <div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 my-12"></div>


            <div className="grid grid-cols-4 gap-5">
                {ITEMS.slice(0, 4).map(i => <Container disablePadding reverseBorder disableBgBr rounded="rounded-xl" className="bg-gradient-to-b from-[#1e1e1e] via-[#2f2f2f] to-[#1e1e1e] px-12 py-6">
                    <Image src={i.image} alt="" width={250} height={250} className="place-self-center" />
                </Container>)}
            </div>

            <div className="grid grid-cols-3 gap-5 mt-5">
                {ITEMS.slice(4).map(i => <Container disablePadding reverseBorder disableBgBr rounded="rounded-xl" className="bg-gradient-to-b from-[#1e1e1e] via-[#2f2f2f] to-[#1e1e1e] px-12 py-6">
                    <Image src={i.image} alt="" width={250} height={250} className="place-self-center" />
                </Container>)}
            </div>



            <div className="flex items-center justify-between mb-12 mt-10">

                <Container
                    disableDimensionFull borderClassName="w-fit h-fit" disablePadding disableBgBr
                    style={{ background: "linear-gradient(0deg, rgba(61, 61, 61, 0.2) 0%, rgba(0, 0, 0, 0.04) 100%)" }}
                    className="flex flex-row w-fit h-fit items-center px-9 py-2" rounded="rounded-lg" reverseBorder
                >
                    <Image src={'/icons/search.svg'} alt="" width={25} height={25} />
                    <input
                        type="text"
                        placeholder="Search Winners"
                        className="rounded-lg pr-12 pl-6 py-3 w-72 text-center font-medium text-2xl text-white placeholder-white focus:outline-none focus:border-gray-600"
                    />
                </Container>


                <div className="flex items-center space-x-2">
                    <Container
                        className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg px-7 mb-1 py-2 md:py-4 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center font-medium text-2xl"
                        borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg"
                    >
                        <span className="mt-1">Live Winners</span>

                    </Container>
                    <Container
                        className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg px-6 mb-1 py-2 md:py-4 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center font-medium text-2xl"
                        borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg"
                    >
                        <Image src={'/icons/scale.svg'} alt="" className="mr-3" width={33} height={33} />
                        <span className="mt-1">Provably Fair</span>

                    </Container>
                    <Container
                        className="bg-gradient-to-b from-[#161616] to-transparent rounded-lg px-6 mb-1 py-2 md:py-4 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center font-medium text-2xl"
                        borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg"
                    >
                        <span className="mt-1">Leaderboard</span>

                    </Container>
                </div>
            </div>

            {/* Main Content */}
            <Container disableBgBr rounded="rounded-lg" disablePadding className="overflow-hidden bg-gradient-to-b from-black/77 to-black/28 px-8 py-10">
                <h1 className="text-4xl font-medium mb-8">Live Winners</h1>

                {/* Table Header */}
                <div className="grid grid-cols-3 gap-6  text-sm font-medium">
                    <div className="text-center text-3xl">Winner</div>
                    <div className="text-center text-3xl">Tickets</div>
                    <div className="text-center text-3xl">Prize Value</div>
                </div>

                <div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 mb-8 mt-8"></div>

                {/* Winners List */}
                <div className="space-y-3">
                    {winners.map((winner, index) => (
                        <Container
                            disableContainer={index > 2}
                            disablePadding
                            miniBorder
                            key={winner.id}
                            disableBgBr rounded="rounded-lg"
                            style={{
                                background: index == 0 ? "linear-gradient(180deg, #FFA100 -53.3%, #FFA100 8.02%, rgba(255, 161, 0, 0) 100%)" :
                                    index == 1 ? "linear-gradient(180deg, #CDCDCD -53.3%, rgba(205, 205, 205, 0) 100%)" :
                                        index == 2 ? 'linear-gradient(180deg, #DA663A -53.3%, rgba(218, 102, 58, 0) 100%)' : undefined

                            }}
                            className={`rounded-lg px-6 py-5 my-6`}
                        >
                            <div className={`grid grid-cols-3 gap-6 items-center text-xl ${index > 2 ? 'px-6 pb-5' : ''}`}>
                                {/* Winner */}
                                <div className="flex items-center space-x-3">

                                    <Image src={'/icons/personCircle.svg'} alt="" className="" width={33} height={33} />
                                    <span className="font-medium text-white ml-2">{winner.username}</span>
                                </div>

                                {/* Tickets */}
                                <div className="text-center text-white font-medium">
                                    {winner.tickets}
                                </div>

                                {/* Prize */}
                                <div className="text-start place-self-center text-white w-[200px] font-medium">
                                    {winner.prize}
                                </div>
                            </div>
                        </Container>
                    ))}
                </div>
            </Container>

        </div>



        <Footer />
    </div>
}


// Animation settings from the video
const REEL_LENGTH = 60; // How many items are in the reel
const ANIMATION_DURATION_MS = 4200;
const ITEM_WIDTH_PX = 320; // w-40 in Tailwind -> 10rem -> 160px
const animationCurve = 'cubic-bezier(0.18, 0.8, 0.1, 0.995)'

// --- Helper Functions ---
const getRandomItem = () => ITEMS[Math.floor(Math.random() * ITEMS.length)];




// --- The Component ---
export function SpinAnimationComponent() {
    const [isSpinning, setIsSpinning] = useState(false);
    const [reelItems, setReelItems] = useState<any[]>([]);
    const [winningItem, setWinningItem] = useState<typeof ITEMS[number] | null>(null);
    const reelRef = useRef(null);
    const animationRef = useRef(null);
    const observerRef = useRef(null);

    const [centeredIndex, setCenteredIndex] = useState(10);

    // Memoize initial reel items
    const initialReelItems = useMemo(() =>
        Array.from({ length: REEL_LENGTH }, getRandomItem), []
    );

    useEffect(() => {
        setReelItems(initialReelItems);
    }, [initialReelItems]);


    // Function to calculate which item is centered
    const updateCenteredItem = useCallback(() => {
        if (!reelRef.current) return;

        const reelContainer = (reelRef.current as any).parentElement;
        const reelRect = (reelRef.current as any).getBoundingClientRect();
        const containerRect = reelContainer.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;

        // Calculate which item is closest to center
        const items = (reelRef.current as any).children;
        let closestIndex = -1;
        let closestDistance = Infinity;

        for (let i = 0; i < items.length; i++) {
            const itemRect = items[i].getBoundingClientRect();
            const itemCenterX = itemRect.left + itemRect.width / 2;
            const distance = Math.abs(centerX - itemCenterX);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        }

        // Only update if the centered item changed and it's close enough to center
        if (closestDistance < ITEM_WIDTH_PX / 2 && closestIndex !== centeredIndex) {
            setCenteredIndex(closestIndex);
        } else if (closestDistance >= ITEM_WIDTH_PX / 2 && centeredIndex !== -1) {
            setCenteredIndex(-1);
        }
    }, [centeredIndex]);

    const handleSpin = useCallback(() => {
        if (isSpinning) return;

        // Cancel any existing animation
        if (animationRef.current) {
            (animationRef.current as any).cancel();
        }

        // Cancel any existing observer
        if (observerRef.current) {
            cancelAnimationFrame(observerRef.current);
        }

        setIsSpinning(true);
        setWinningItem(null);
        setCenteredIndex(-1);

        // 1. Generate a new list of random items for the reel
        const newReelItems = Array.from({ length: REEL_LENGTH }, getRandomItem);

        // 2. Determine a "winning" item near the end of the reel for a dramatic slowdown
        const winningIndex = REEL_LENGTH - Math.floor(Math.random() * 10) - 5; // e.g., lands on item 60-64
        const winner = newReelItems[winningIndex];
        setReelItems(newReelItems);

        // 3. Calculate the final position to center the winning item
        // We need to account for the reel container's own centering math.
        // The calculation is: (Winning Index * Item Width)
        const finalPosition = -(winningIndex - 10) * ITEM_WIDTH_PX;

        if (reelRef.current) {
            const reelElement = reelRef.current;

            // Reset any existing transform
            (reelElement as any).style.transform = 'translateX(0px)';

            // Use Web Animations API for better performance
            animationRef.current = (reelElement as any).animate([
                { transform: 'translateX(0px)' },
                { transform: `translateX(${finalPosition}px)` }
            ], {
                duration: ANIMATION_DURATION_MS,
                easing: animationCurve,
                fill: 'forwards'
            });

            (animationRef.current as any).addEventListener('finish', () => {
                setIsSpinning(false);
                setWinningItem(winner);
                // Update centered item one final time
                setTimeout(() => updateCenteredItem(), 100);
            }, { once: true });
        }

    }, [isSpinning]);


    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                (animationRef.current as any).cancel();
            }
        };
    }, []);

    const reelContainerStyle = useMemo(() => ({
        // paddingLeft: `calc(50% - ${ITEM_WIDTH_PX / 2}px)`,
        paddingLeft: `calc(${ITEM_WIDTH_PX * (REEL_LENGTH - (10 + 0.5) * 2)}px)`,
        willChange: 'transform',
        transform: 'translateZ(0)', // Force hardware acceleration
    }), []);

    // Set up animation listener
    useEffect(() => {
        if (!reelRef.current) return;

        const handleAnimationFrame = () => {
            updateCenteredItem();
            if (isSpinning) {
                (observerRef.current as any) = requestAnimationFrame(handleAnimationFrame);
            }
        };

        if (isSpinning) {
            (observerRef.current as any) = requestAnimationFrame(handleAnimationFrame);
        }

        return () => {
            if (observerRef.current) {
                cancelAnimationFrame(observerRef.current);
            }
        };
    }, [isSpinning, updateCenteredItem]);

    const triangleSize = 30

    return (
        <>

            {/* The Reel Container */}
            <Container className="relative w-full flex items-center justify-center overflow-hidden mb-8 mt-10 bg-gradient-to-b from-[black]/70 via-50% via-[#1e1e1e]/0 to-transparent" disableBgBr rounded="rounded-lg" reverseBorder borderStyle={{}}>
                {/* The Center Marker */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 flex flex-col items-center pt-5 pb-5">
                    <Image width={triangleSize} height={triangleSize} alt="" src={'/triangleDown.svg'} />
                    <div className="w-1 h-full bg-gradient-to-b from-transparent via-[#ff0000]/80 to-transparent my-10"></div>
                    <Image width={triangleSize} height={triangleSize} alt="" src={'/triangleUp.svg'} />
                </div>

                {/* The Reel Itself */}
                <div
                    ref={reelRef}
                    className="flex items-center my-10"
                    style={reelContainerStyle}
                >
                    {reelItems.map((item, index) => (
                        <ReelItem
                            key={`${index}-${item.name}-${item.rarity}`}
                            item={item}
                            index={index}
                            isSpinning={isSpinning}
                            className={index == centeredIndex ? "scale-[1.8]" : ''}
                        />
                    ))}
                </div>
            </Container>

            {/* The Open Button */}
            <div className="grid grid-cols-3 mt-10">

                <div></div>

                {/* <div className="p-[1px] w-fit bg-gradient-to-b` from-white to-[#3d3d3d] rounded-xl place-self-center"> */}
                <Container
                    onClick={handleSpin}
                    disabled={isSpinning}
                    disableBgBr rounded="rounded-lg" disablePadding
                    borderClassName="w-fit h-fit place-self-center"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 36, 36, 0.4) -25.2%, #891616 100%)"
                    }}
                    className=" group cursor-pointer transform transition-all duration-200 disabled:bg-[color:#940f0d] disabled:cursor-not-allowed disabled:scale-100 flex flex-row items-center w-fit h-fit font-medium"
                >
                    <Image src={'/icons/spin.svg'} className="ml-7 mr-5" alt="" width={25} height={25} />
                    <span className="text-2xl">{isSpinning ? 'Spinning...' : 'Demo Spin'}</span>
                    <Container disableDimensionFull disablePadding disableBgBr rounded="rounded-xl" borderClassName="ml-8" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #891616 100%)" }} className="aspect-square group-disabled:bg-[color:#940f0d] h-full rounded-xl w-fit pt-5 pb-5 px-[24px] text-2xl">27</Container>
                </Container>

                {/* </div> */}

                <div className="place-self-end self-center">
                    <button style={{ background: "linear-gradient(180deg, #6B6B6B -40.3%, rgba(107, 107, 107, 0) 90%)" }} className="font-medium border-[0.3px] border-[color:#a6a6a6] pl-8  pr-6 py-2 rounded-lg text-lg transition-colors flex flex-row">
                        How it Works
                        <Image src={'/icons/arrowLink.svg'} className="ml-4" alt="" width={15} height={15} />
                    </button>
                </div>
            </div>
        </>
    );
}



// Memoized item component to prevent unnecessary re-renders
const ReelItem = ({ item, index, isSpinning, className }: { className?: string, isSpinning: boolean, index: number, item: typeof ITEMS[number] }) => {
    const itemStyle = useMemo(() => ({
        transform: 'translateZ(0)', // Force hardware acceleration
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        width: ITEM_WIDTH_PX,
        height: ITEM_WIDTH_PX + 100
    } as const), []);

    return (
        <div
            className={`flex-shrink-0 flex flex-col items-center justify-center will-change-transform transition-all  duration-[60ms] ${className}`}
            style={itemStyle}
        >
            <Image src={item.image} alt={item.name} width={190} height={190} />

        </div>
    );
};
