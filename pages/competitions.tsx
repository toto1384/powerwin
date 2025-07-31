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

    const [tab, setTab] = useState<"all-raffles" | "instant-win">('all-raffles')

    return <div className="flex flex-col items-center">

        <NavBar />
        <div className="border-l border-r border-white w-full p-2 md:p-9 md:pt-24 max-w-[1800px]" style={{
            background: "linear-gradient(162.58deg, #323232 0%, #000000 100%)"
        }}>

            <NavBarMobile />
            <h1 className="text-4xl md:text-center md:text-5xl mt-7 mb-4 md:mb-20 font-medium">Competitions</h1>
            <div className="grid grid-cols-2 gap-2">
                {([{ name: 'All raffles', value: 'all-raffles' }, { name: 'Instant Win', value: 'instant-win' }] as const).map(i =>
                    <Container
                        disablePadding disableBgBr
                        className={`text-center md:text-2xl font-medium cursor-pointer bg-gradient-to-b ${i.value == tab ? 'to-[#161616] from-transparent' : 'from-[#f3f3f3]/25 to-transparent'} py-2 md:py-5`}
                        rounded="rounded-lg" reverseBorder
                        onClick={() => setTab(i.value)}
                    > {i.name} </Container>
                )}
            </div>

            {tab == 'instant-win' ? <InstantWinTab /> : <AllRafflesTab />}

        </div>



        <Footer />
    </div>
}


function InstantWinTab() {

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

    return <>
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
    </>
}

function AllRafflesTab() {

    const size = useSize(true)

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    const prizes = [
        {
            id: 1,
            image: "/porche.png",
            title: "Win this Porsche 911 Turbo S 2022",
            subtitle: "or Alternative Cash - $80,000",
            progress: 75.73,
            entryPrice: "$2.50",
            className: "scale-[1.2] aspect-[1.7] transform-[scaleX(-1)]",
        },
        {
            id: 2,
            image: "/mansion.png",
            title: "Win this Binghatti Hillviews luxury apartment in Dubai",
            subtitle: "or Alternative Cash - $150,000",
            progress: 75.73,
            className: "scale-[1] aspect-[1.7]",
            entryPrice: "$2.50"
        },
        {
            id: 3,
            image: "/prize3.png",
            title: "Win this iPhone 16 Pro Max 256GB",
            subtitle: "or Alternative Cash - $1,000",
            progress: 75.73,
            entryPrice: "$2.50",
            className: 'aspect-[1.7]',
        },
        {
            id: 4,
            image: "/hublot.png",
            title: "Win this Hublot Big Bang Gold 44mm",
            subtitle: "or Alternative Cash - $30,000",
            progress: 75.73,
            width: 160,
            entryPrice: "$2.50"
        },
        {
            id: 5,
            image: "/lambo.png",
            title: "Win this Lamborghini Aventador SVJ Cabrio",
            subtitle: "or Alternative Cash - $500,000",
            progress: 75.73,
            entryPrice: "$2.50",
            className: 'aspect-video'
        },
        {
            id: 6,
            image: "/audemars.png",
            title: "Win this Audemars Piguet Royal Oak Chronograph Limited Edition",
            subtitle: "or Alternative Cash - $125,000",
            progress: 75.73,
            entryPrice: "$2.50",
            width: 230,
            className: 'pt-2'
        },
        {
            id: 7,
            image: "/bitcoin.png",
            title: "Win this Bitcoin",
            subtitle: "",
            progress: 75.73,
            width: 210,
            entryPrice: "$2.50",
            className: "scale-[1.1]"
        },
        {
            id: 8,
            image: "/usdc.png",
            title: "Win 25,000 USDC",
            subtitle: "",
            progress: 75.73,
            width: 210,
            entryPrice: "$2.50",
            className: "scale-125"
        },
        {
            id: 9,
            image: "/ethereum.png",
            title: "Win this Ethereum",
            subtitle: "",
            progress: 75.73,
            entryPrice: "$2.50",
            width: 300,
            className: 'scale-[1.5]'
        },



    ];


    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPrizes = [...prizes].slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return <>
        <div className="flex flex-row items-center justify-between mt-6">

            <Container
                disableDimensionFull borderClassName="w-fit h-fit col-span-2 md:col-span-1" disablePadding disableBgBr
                style={{ background: "linear-gradient(0deg, rgba(61, 61, 61, 0.2) 0%, rgba(0, 0, 0, 0.04) 100%)" }}
                className="flex flex-row w-fit h-full items-center px-4 md:px-9 md:py-3 col-span-3 md:col-span-1" rounded="rounded-lg" reverseBorder
            >
                <Image src={'/icons/search.svg'} alt="" width={size.gsm ? 25 : 17} height={size.gsm ? 25 : 17} className="mr-2" />
                <input
                    type="text"
                    placeholder="Search"

                    className="rounded-lg pr-12 md:py-3 box-border md:text-center font-medium text-sm md:text-2xl text-white placeholder-white focus:outline-none focus:border-gray-600"
                />
            </Container>

            <div className="flex space-x-2 flex-row">

                <Container
                    disableBgBr
                    className={`${true ? 'bg-gradient-to-b from-[#161616] to-transparent' : 'bg-gradient-to-b from-[#f3f3f3]/20 to-transparent'} text-center py-3 md:py-4 px-2 md:px-7 font-medium text-sm md:text-2xl cursor-pointer flex flex-row w-fit items-center justify-center`}
                    disablePadding reverseBorder rounded="rounded-lg"
                >
                    <span>Max Price</span>
                    <div className="bg-[color:#373737] px-5 rounded-lg py-2 ml-5">$500.000</div>

                </Container>

                <Container
                    disableBgBr
                    className={` text-center py-3 md:py-6 px-2 md:px-7 font-medium text-sm md:text-2xl cursor-pointer flex flex-row items-center justify-center`}
                    style={{ background: "linear-gradient(0deg, rgba(61, 61, 61, 0.2) 0%, rgba(0, 0, 0, 0.04) 100%)" }}
                    disablePadding reverseBorder rounded="rounded-lg"
                >
                    <span className="md:mx-5 md:ml-12">Sort By</span>
                    <svg className="w-3 h-3 ml-1 md:ml-2" width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.73333 0.5L6.07608 0.5C6.47333 0.5 6.71194 0.940912 6.49466 1.27347L4.12458 4.90115C3.93457 5.19198 3.5132 5.20518 3.30536 4.92682L0.596695 1.29914C0.35048 0.969393 0.585803 0.5 0.997334 0.5L3.73333 0.5Z" fill="white" />
                    </svg>

                </Container>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 mt-7 gap-4">
            {currentPrizes.map((prize, index) => (
                <Container disablePadding disableBgBr key={prize.id} reverseBorder rounded="rounded-lg"
                    className={` bg-gradient-to-b from-[#161616]/20 via-[#797979]/40 to-[#161616]/20 flex flex-col justify-between p-5 ${index % 3 && ''}`}
                >
                    {/* Prize Image */}
                    <div className="rounded-lg w-full aspect-[2] flex items-center justify-center text-6xl" style={{}}>
                        <Image className={`rounded object-cover  ${prize.className}`} width={prize.width ?? 600} height={1} src={prize.image} alt="" />
                    </div>

                    <div>
                        {/* Progress Section */}
                        <div className="px-3 h-16 relative">
                            <div className="mb-4 absolute top-0 flex flex-col items-center " style={{ left: `${prize.progress}%`, transform: "translateX(-50%)" }}>
                                <span className="">{prize.progress.toFixed(2)}%</span>
                                <div className="w-[2px] h-4 bg-gradient-to-b from-transparent to-[#531615]"></div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative top-10 mb-4">
                                <div className="relative mb-4">
                                    {/* Tick marks */}
                                    <div className="absolute top-0 left-2 right-0 h-3.5 w-[95%] flex">
                                        {Array.from({ length: size.lmd ? 80 : 100 }, (_, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 border-l my-auto border-[color:#6E6E6E] h-[60%]"
                                                style={{ borderLeftWidth: '1.5px' }}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 w-full rounded-full h-[14px] overflow-hidden z-10">
                                        <div
                                            className="h-full bg-gradient-to-r rounded-full border-[0.7px] backdrop-blur-[2.5px] border-white from-white/10 to-[#94100f] transition-all duration-200 ease-out"
                                            style={{ width: `${prize.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="px-3 mb-6 h-30 font-medium">
                            <h3 className="text-2xl mb-2 leading-tight">
                                {prize.title}
                            </h3>
                            {prize.subtitle && (
                                <p className="text-gray-300 text-2xl">
                                    {prize.subtitle}
                                </p>
                            )}
                        </div>

                        <div className="px-3 my-5 flex flex-col items-center text-xl">
                            <button className=" bg-gradient-to-b from-[#C41313] to-[#B31313]/15 border-[0.5px] border-red-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                                Enter - {prize.entryPrice}
                            </button>

                        </div>

                    </div>
                </Container>
            ))}
        </div>

        <div className="flex items-center justify-center space-x-4 mt-12 mb-5">
            <Container
                onClick={prevPage}
                disabled={currentPage === 1} disablePadding miniBorder reverseBorder
                className="p-4 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <svg width="45" height="45" viewBox="0 0 35 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 2L1.70711 33.2929C1.31658 33.6834 1.31658 34.3166 1.70711 34.7071L33 66" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                </svg>
            </Container>

            <span className=" text-3xl font-medium px-10">
                Showing {currentPage} of {totalPages}
            </span>

            <Container
                onClick={nextPage}
                disabled={currentPage === totalPages} disablePadding miniBorder reverseBorder
                className="p-4 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <svg width="44" height="45" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.49999 64L31.7929 33.7071C32.1834 33.3166 32.1834 32.6834 31.7929 32.2929L1.5 1.99998" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                </svg>

            </Container>
        </div>
    </>
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
