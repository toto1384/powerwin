import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar, { NavBarMobile } from "@/components/navbar";
import { useSize } from "@/utils/useSize";
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
            username: "MichaelJackson1234",
            tickets: "12323123",
            prize: "$10 - Credit",
        }
    ];

    const size = useSize(true)

    return <div className="flex flex-col items-center">

        <NavBar />
        <div className="border-l border-r border-white w-full p-2 md:p-9 md:pt-24 max-w-[1800px]" style={{
            background: "linear-gradient(162.58deg, #323232 0%, #000000 100%)"
        }}>

            <NavBarMobile />
            <h1 className="text-4xl md:text-center md:text-5xl mt-7 mb-4 md:mb-20 font-medium">Competitions</h1>
            <div className="grid grid-cols-2 gap-2">
                <Container disablePadding disableBgBr className="text-center md:text-2xl font-medium bg-gradient-to-b from-[#f3f3f3]/25 to-transparent py-2 md:py-5" rounded="rounded-lg" reverseBorder>
                    All raffles
                </Container>

                <Container disablePadding disableBgBr className="text-center md:text-2xl font-medium bg-gradient-to-b to-[#161616] from-transparent py-2 md:py-5" rounded="rounded-lg" reverseBorder>
                    Instant Win
                </Container>
            </div>

            <SpinAnimationComponent />

            <div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 my-9 md:my-12"></div>


            <div className="grid grid-cols-4 gap-1 md:gap-5">
                {ITEMS.slice(0, 4).map(i => <Container disablePadding reverseBorder disableBgBr rounded="rounded-lg md:rounded-xl" className="bg-gradient-to-b from-[#1e1e1e] via-[#2f2f2f] to-[#1e1e1e] px-2 py-3 md:px-12 md:py-6 flex flex-col items-center w-fit">
                    <Image src={i.image} alt="" width={250} height={250} className="place-self-center" />
                </Container>)}
            </div>

            <div className="grid grid-cols-3 gap-1 md:gap-5 mt-1 md:mt-5">
                {ITEMS.slice(4).map(i => <Container disablePadding reverseBorder disableBgBr rounded="rounded-lg md:rounded-xl" className="bg-gradient-to-b from-[#1e1e1e] via-[#2f2f2f] to-[#1e1e1e] px-2 py-2 md:px-12 md:py-6 flex flex-col items-center w-fit">
                    <Image src={i.image} alt="" width={250} height={250} className="place-self-center" />
                </Container>)}
            </div>



            <div className="flex items-center justify-between mb-5 md:mb-12 mt-10">

                <Container
                    disableDimensionFull borderClassName="w-fit h-fit md:block hidden" disablePadding disableBgBr
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


                <div className="flex items-center space-x-1 md:space-x-2 md:font-medium text-sm md:text-2xl justify-stretch">
                    <Container
                        className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg px-7 mb-1 py-1 md:py-4 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center "
                        borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg" miniBorder
                    >
                        <span className=" mt-1">Live Winners</span>

                    </Container>
                    <Container
                        className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg px-6 mb-1 py-1 md:py-4 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center "
                        borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg" miniBorder
                    >
                        <Image src={'/icons/scale.svg'} alt="" className="mr-3" width={size.gsm ? 33 : 17} height={size.gsm ? 33 : 17} />
                        <span className="mt-1">Provably Fair</span>

                    </Container>
                    <Container
                        className="bg-gradient-to-b from-[#161616] to-transparent rounded-lg px-3 md:px-6 mb-1 py-1 md:py-4 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center "
                        borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg" miniBorder
                    >
                        <span className=" mt-1">Leaderboard</span>

                    </Container>
                </div>
            </div>

            {/* Main Content */}
            <Container disableBgBr rounded="rounded-lg" disablePadding className="overflow-hidden bg-gradient-to-b from-black/77 to-black/28 px-2 md:px-8 py-4 md:py-10">
                <h1 className="text-4xl font-medium mb-8 hidden md:block">Live Winners</h1>

                {/* Table Header */}
                <div className="grid grid-cols-3 gap-6 text- md:font-medium md:text-3xl mx-5 md:mx-0">
                    <div className="text-start md:text-center ">Winner</div>
                    <div className="text-center">Tickets</div>
                    <div className="text-end md:text-center">Prize Value</div>
                </div>

                <div className="w-full bg-gradient-to-l from-transparent via-white to-transparent mx-5 md:mx-0 h-0.5 mb-4 md:mb-8 mt-4 md:mt-8"></div>

                {/* Winners List */}
                <div className="space-y-3 md:mr-12 text-xs">
                    {winners.map((winner, index) => (
                        <Container
                            disableContainer={index > 2}
                            disablePadding
                            miniBorder
                            key={winner.id}
                            disableBgBr rounded="rounded-lg"
                            style={{
                                background: index == 0 ? "linear-gradient(180deg, #FFA100 -53.3%, #FFA100 30.02%, rgba(255, 161, 0, 0) 100%)" :
                                    index == 1 ? "linear-gradient(180deg, #CDCDCD -23.3%, rgba(205, 205, 205, 0) 100%)" :
                                        index == 2 ? 'linear-gradient(180deg, #DA663A -53.3%, rgba(218, 102, 58, 0) 100%)' : undefined

                            }}
                            className={`rounded-lg px-2 py-2.5 md:px-6 md:py-5`} borderClassName="md:my-8"
                        >
                            <div className={`grid grid-cols-3 gap-6 items-center md:text-xl ${index > 2 ? ' px-2 md:px-6 md:pb-5' : ''}`}>
                                {/* Winner */}
                                <div className="flex items-center md:space-x-3">

                                    <Image src={'/icons/personCircle.svg'} alt="" className="" width={size.gsm ? 33 : 18} height={size.gsm ? 33 : 18} />
                                    <span className="font-medium text-white ml-2">{winner.username}</span>
                                </div>

                                {/* Tickets */}
                                <div className="text-center text-white font-medium">
                                    {winner.tickets}
                                </div>

                                {/* Prize */}
                                <div className="md:text-start place-self-center text-white w-[120px] md:w-[200px] font-medium">
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

const animationCurve = 'cubic-bezier(0.18, 0.8, 0.1, 0.995)'

// --- Helper Functions ---
const getRandomItem = () => ITEMS[Math.floor(Math.random() * ITEMS.length)];


const interleave = (arr: any[], thing: any) => [].concat(...arr.map(n => [n, thing] as any)).slice(0, -1)

function createThrottle(func: (...args: any) => any, delay = 50) {
    let lastCall = 0;

    return function (...args: any) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            // @ts-ignore
            return func.apply(this, args);
        }
    };
}

// --- The Component ---
export function SpinAnimationComponent() {

    const size = useSize(true)

    const ITEM_WIDTH_PX = 320;

    const [isSpinning, setIsSpinning] = useState(false);
    const [reelItems, setReelItems] = useState<any[]>([]);
    const [winningItem, setWinningItem] = useState<typeof ITEMS[number] | null>(null);
    const reelRef = useRef(null);
    const animationRef = useRef(null);
    const endingAnimationRef = useRef(null);
    const observerRef = useRef(null);

    const finalTickAudioRef = useRef<any>(null)
    const tickAudioRef = useRef<any>(null)

    useEffect(() => {
        // Preload the audio
        finalTickAudioRef.current = new Audio(`/sounds/final_tick.aac`)
        finalTickAudioRef.current.preload = 'auto'

        tickAudioRef.current = new Audio(`/sounds/ticks.aac`)
        tickAudioRef.current.preload = 'auto'

        return () => {
            if (finalTickAudioRef.current) {
                finalTickAudioRef.current.pause()
            }
            if (tickAudioRef.current) {
                tickAudioRef.current.pause()
            }
        }
    }, [])

    const [centeredIndex, setCenteredIndex] = useState(10);

    // Memoize initial reel items
    const initialReelItems = useMemo(() =>
        interleave(Array.from({ length: (REEL_LENGTH) / 1.5 }, getRandomItem), ITEMS[0]).slice(0, REEL_LENGTH), []
    );

    useEffect(() => {
        setReelItems(initialReelItems);
    }, [initialReelItems]);


    // Function to calculate which item is centered
    const updateCenteredItem = useCallback(createThrottle(() => {
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
            if (tickAudioRef.current) {
                tickAudioRef.current.play().then((i: any) => tickAudioRef.current = null).catch((error: any) => {
                    console.error('Error playing sound:', error)
                })
            } else {
                const audio = new Audio(`/sounds/ticks.aac`)
                audio.preload = 'auto'
                audio.play().catch((error: any) => {
                    console.error('Error playing sound:', error)
                })
            }
        } else if (closestDistance >= ITEM_WIDTH_PX / 2 && centeredIndex !== -1) {
            setCenteredIndex(-1);
        }
    }, 25), [centeredIndex,]);

    const handleSpin = useCallback(() => {
        if (isSpinning) return;

        // Cancel any existing animation
        if (animationRef.current) {
            (animationRef.current as any).cancel();
        }

        if (endingAnimationRef.current) {
            (endingAnimationRef.current as any).cancel();
        }

        // Cancel any existing observer
        if (observerRef.current) {
            cancelAnimationFrame(observerRef.current);
        }

        setIsSpinning(true);
        setWinningItem(null);
        setCenteredIndex(-1);

        // 1. Generate a new list of random items for the reel
        const newReelItems = interleave(Array.from({ length: (REEL_LENGTH) / 1.5 }, getRandomItem), ITEMS[0]).slice(0, REEL_LENGTH);

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

            const num = Math.random() * (6 - 3) + 3; // Random between 3-6
            const result = Math.random() < 0.5 ? -num : num; // 50% chance negative

            // Use Web Animations API for better performance
            animationRef.current = (reelElement as any).animate([
                { transform: 'translateX(0px)' },
                { transform: `translateX(${finalPosition + ITEM_WIDTH_PX / result}px)` }
            ], {
                duration: ANIMATION_DURATION_MS,
                easing: animationCurve,
                fill: 'forwards'
            });

            (animationRef.current as any).addEventListener('finish', () => {

                // Use Web Animations API for better performance
                endingAnimationRef.current = (reelElement as any).animate([
                    { transform: `translateX(${finalPosition + ITEM_WIDTH_PX / result}px)` },
                    { transform: `translateX(${finalPosition}px)` },
                ], {
                    duration: ANIMATION_DURATION_MS / 15,
                    easing: 'ease',
                    fill: 'forwards'
                });

                finalTickAudioRef.current.play().catch((error: any) => {
                    console.error('Error playing sound:', error)
                });

                (endingAnimationRef.current as any).addEventListener('finish', () => {
                    setIsSpinning(false);
                    setWinningItem(winner);
                    // Update centered item one final time
                    // setTimeout(() => updateCenteredItem(), 100);
                }, { once: true });



            }, { once: true });
        }

    }, [isSpinning]);


    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                (animationRef.current as any).cancel();
            }

            if (endingAnimationRef.current) {
                (endingAnimationRef.current as any).cancel();
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

    const triangleSize = size.gsm ? 30 : 12

    return (
        <>

            {/* The Reel Container */}
            <Container className="relative w-full flex items-center justify-center overflow-hidden mb-8 mt-5 md:mt-10 bg-gradient-to-b from-[black]/70 via-50% via-[#1e1e1e]/0 to-transparent" disableBgBr disablePadding rounded="rounded-lg" reverseBorder borderStyle={{}}>
                {/* The Center Marker */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 flex flex-col items-center py-2 md:pt-5 md:pb-5">
                    <Image width={triangleSize} height={triangleSize} alt="" src={'/triangleDown.svg'} />
                    <div className="w-1 h-full bg-gradient-to-b from-transparent via-[#ff0000]/80 to-transparent my-3 md:my-10"></div>
                    <Image width={triangleSize} height={triangleSize} alt="" src={'/triangleUp.svg'} />
                </div>

                {/* The Reel Itself */}
                <div
                    ref={reelRef}
                    className="flex items-center -my-10 md:my-14 scale-[0.55] md:scale-100"
                    style={reelContainerStyle}
                >
                    {reelItems.map((item, index) => (
                        <ReelItem
                            key={`${index}-${item.name}-${item.rarity}`}
                            item={item} itemWidth={ITEM_WIDTH_PX}
                            index={index}
                            isSpinning={isSpinning}
                            className={index == centeredIndex ? "scale-[1.8]" : ''}
                        />
                    ))}
                </div>
            </Container>

            {/* The Open Button */}
            <div className="grid grid-cols-7 mt-10">

                <div className="col-span-2"></div>

                {/* <div className="p-[1px] w-fit bg-gradient-to-b` from-white to-[#3d3d3d] rounded-xl place-self-center"> */}
                <Container
                    onClick={handleSpin}
                    disabled={isSpinning}
                    disableBgBr rounded="rounded-lg" disablePadding
                    borderClassName="w-fit h-fit place-self-center col-span-3"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 36, 36, 0.4) -25.2%, #891616 100%)"
                    }}
                    className=" group cursor-pointer transform transition-all duration-200 disabled:bg-[color:#940f0d] disabled:cursor-not-allowed disabled:scale-100 flex flex-row items-center w-fit h-fit font-medium"
                >
                    <Image src={'/icons/spin.svg'} className="md:ml-7 md:mr-5 ml-5 mr-2" alt="" width={size.gsm ? 25 : 15} height={size.gsm ? 25 : 15} />
                    <span className="text-sm md:text-2xl">{isSpinning ? 'Spinning...' : 'Demo Spin'}</span>
                    <Container disableDimensionFull disablePadding disableBgBr rounded="rounded-lg" borderClassName="ml-5 md:ml-8" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #891616 100%)" }} className="aspect-square group-disabled:bg-[color:#940f0d] h-full w-fit py-1.5 px-[9px] md:py-5 md:px-[24px] md:text-2xl">27</Container>
                </Container>

                {/* </div> */}

                <div className="place-self-end self-center col-span-2">
                    <button style={{ background: "linear-gradient(180deg, #6B6B6B -40.3%, rgba(107, 107, 107, 0) 90%)" }} className="font-medium border-[0.3px] border-[color:#a6a6a6] md:pl-8 px-2 md:pr-6 md:py-2 py-1.5 rounded md:rounded-lg text-xs md:text-lg transition-colors flex flex-row items-center">
                        How it Works
                        <Image src={'/icons/arrowLink.svg'} className="ml-2 md:ml-4" alt="" width={size.gsm ? 15 : 10} height={size.gsm ? 15 : 10} />
                    </button>
                </div>
            </div>
        </>
    );
}



// Memoized item component to prevent unnecessary re-renders
const ReelItem = ({ item, index, isSpinning, className, itemWidth }: { className?: string, isSpinning: boolean, index: number, item: typeof ITEMS[number], itemWidth: number }) => {
    const size = useSize(true)

    const itemStyle = ({
        transform: 'translateZ(0)', // Force hardware acceleration
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        width: itemWidth,
        height: itemWidth + (size.gsm ? 100 : 0)
    } as const);

    return (
        <div
            className={`flex-shrink-0 flex flex-col items-center justify-center will-change-transform transition-all  duration-[150ms] ${className}`}
            style={itemStyle}
        >
            <Image src={item.image} alt={item.name} width={190} height={190} />

        </div>
    );
};
