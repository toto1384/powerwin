import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar, { NavBarMobile } from "@/components/navbar";
import { useSize } from "@/utils/useSize";
import Image from "next/image";
import { useState } from "react";





export default function PowerWinWinners() {
    const winners = [
        { player: "Hidden", game: "Spin to Win", time: "4-11 22:17", prize: "$1000 - iPhone 16 Pro Max", isHighlighted: false },
        { player: "Love83", game: "Spin to Win", time: "4-11 22:17", prize: "$5000 - Cartier Love Bracelet", isHighlighted: false },
        { player: "CristianoMaradona69", game: "Spin to Win", time: "4-11 22:17", prize: "$8000 - Hermes Birkin", isHighlighted: true },
        { player: "Hidden", game: "Instant Win", time: "4-11 22:17", prize: "$25 - Credit", isHighlighted: false },
        { player: "Klauslohannis", game: "Instant Win", time: "4-11 22:17", prize: "$100 - Cash", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "MichaelJackson1234567890", game: "Instant Win", time: "4-11 22:17", prize: "$10 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
        { player: "DorianPopaHatz777", game: "Instant Win", time: "4-11 22:17", prize: "$0.01 - Credit", isHighlighted: false },
    ];

    const size = useSize(true)

    const winnerTabs = [
        { text: 'All Winners' },
        { text: 'Raffle Winners' },
        { text: 'Instant Win' },
        { text: 'Spin to Win' }
    ] as const

    const [winnerTab, setWinnerTab] = useState<typeof winnerTabs[number]['text']>('All Winners')

    return (
        <div className="flex flex-col items-center">

            <NavBar />
            <div className="border-l border-r border-white w-full p-2 md:p-9 md:pt-24 max-w-[1800px]" style={{
                background: "linear-gradient(162.58deg, #323232 0%, #000000 100%)"
            }}>

                <NavBarMobile />
                <h1 className="text-3xl md:text-6xl font-medium text-center mb-3 md:mb-15 mt-10 text-gray-100">
                    PowerWin Winners
                </h1>

                {/* Top Navigation Buttons */}
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

                    {winnerTabs.map(i => <Container
                        onClick={() => setWinnerTab(i.text)} disableBgBr
                        className={`${i.text == winnerTab ? 'bg-gradient-to-b from-[#161616] to-transparent' : 'bg-gradient-to-b from-[#f3f3f3]/20 to-transparent'} text-center py-6 px-5 font-medium text-2xl cursor-pointer`}
                        disablePadding reverseBorder rounded="rounded-xl"
                    >
                        {i.text}
                    </Container>)}

                </div>

                {/* Second Row Buttons */}
                <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-1.5 gap-y-4 md:gap-4 mb-5 md:mb-14">
                    <Container
                        disableDimensionFull borderClassName="w-full h-fit col-span-2 md:col-span-1" disablePadding disableBgBr
                        style={{ background: "linear-gradient(0deg, rgba(61, 61, 61, 0.2) 0%, rgba(0, 0, 0, 0.04) 100%)" }}
                        className="flex flex-row w-fit h-full items-center px-4 md:px-9 md:py-2 col-span-3 md:col-span-1" rounded="rounded-lg" reverseBorder
                    >
                        <Image src={'/icons/search.svg'} alt="" width={size.gsm ? 25 : 17} height={size.gsm ? 25 : 17} className="mr-2" />
                        <input
                            type="text"
                            placeholder="Search"

                            className="rounded-lg pr-12 md:py-3 box-border md:text-center font-medium text-sm md:text-2xl text-white placeholder-white focus:outline-none focus:border-gray-600"
                        />
                    </Container>

                    <Container
                        disableBgBr
                        className={`${true ? 'bg-gradient-to-b from-[#161616] to-transparent' : 'bg-gradient-to-b from-[#f3f3f3]/20 to-transparent'} text-center py-3 md:py-6 px-2 md:px-5 font-medium text-sm md:text-2xl cursor-pointer flex flex-row items-center justify-center`}
                        disablePadding reverseBorder rounded="rounded-lg" borderClassName="md:hidden"
                    >
                        <span>All winners</span>
                        <svg className="w-3 h-3 ml-1 md:ml-2" width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.73333 0.5L6.07608 0.5C6.47333 0.5 6.71194 0.940912 6.49466 1.27347L4.12458 4.90115C3.93457 5.19198 3.5132 5.20518 3.30536 4.92682L0.596695 1.29914C0.35048 0.969393 0.585803 0.5 0.997334 0.5L3.73333 0.5Z" fill="white" />
                        </svg>

                    </Container>

                    <div className="md:flex flex-row items-center justify-end col-span-3 grid grid-cols-3 gap-1.5 md:gap-4 order-first md:order-last">
                        <Container
                            className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg px-2 md:px-6 mb-1 py-1 md:py-6 text-white placeholder-white focus:outline-none text-center  flex flex-row items-center justify-center text-sm md:text-xl"
                            borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg" miniBorder
                        >
                            <Image src={'/icons/scale.svg'} alt="" className="mr-1 md:mr-3" width={size.gsm ? 33 : 17} height={size.gsm ? 30 : 15} />
                            <span className="">Provably Fair</span>

                        </Container>
                        <Container
                            className="bg-gradient-to-b to-[#161616] from-transparent  rounded-lg px-2 md:px-6 py-1 md:py-6 text-white placeholder-white focus:outline-none text-center flex flex-row items-center justify-center text-sm md:text-xl"
                            borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg" miniBorder
                        >
                            Live Winners
                        </Container>
                        <Container
                            className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg px-2 md:px-6 py-1 md:py-6 text-white placeholder-white focus:outline-none text-center flex flex-row items-center justify-center text-sm md:text-xl"
                            borderClassName="" reverseBorder disableBgBr disablePadding rounded="rounded-lg" miniBorder
                        >
                            Leaderboard
                        </Container>
                    </div>

                </div>

                {/* Winners Table */}
                <Container disablePadding className=" rounded-lg overflow-hidden bg-gradient-to-b from-black/20 to-black/10 px-1 md:px-7 py-3 md:py-7 ">
                    {/* Table Header */}
                    <div className="grid grid-cols-14 md:grid-cols-4 gap-4 px-6 py-2 md:py-6 md:text-2xl bg-gray-750 md:text-center md:font-medium">
                        <div className="max-w-[200px] col-span-4 md:col-span-1 ml-4">Player</div>
                        <div className="max-w-[200px] col-span-3 md:col-span-1 text-center">Game</div>
                        <div className="max-w-[200px] col-span-3 md:col-span-1 text-center">Time</div>
                        <div className="max-w-[200px] col-span-4 md:col-span-1 text-center">Prize</div>
                    </div>

                    {/* gradient line */}
                    <div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 md:my-2"></div>

                    {/* Table Body */}
                    <div className="mt-3">
                        {winners.map((winner, index) => (
                            <Container
                                key={index} disableContainer={!winner.isHighlighted} disablePadding disableBgBr rounded="rounded-lg"
                                className={`hover:bg-gray-750 transition-colors duration-200 ${winner.isHighlighted ? 'md:py-3 my-1 md:my-3 rounded-lg bg-gradient-to-b from-[#6b6b6b]/50 to-transparent' : ''}`}
                            >
                                <div className="grid grid-cols-14 md:grid-cols-4 gap-4 p-2 md:px-6 text-xs md:text-xl font-medium">

                                    <div className="flex items-center justify-start gap-1 md:gap-3 max-w-[200px] col-span-4 md:col-span-1 whitespace-nowrap overflow-hidden">
                                        <Image src={'/icons/personCircle.svg'} alt="" className="" width={size.gsm ? 33 : 18} height={size.gsm ? 33 : 18} />
                                        <span className="text-gray-100 font-medium">{truncateText(winner.player, size.gsm ? 30 : 12)}</span>
                                    </div>
                                    <div className="text-gray-200 flex items-center justify-center max-w-[200px] col-span-3 md:col-span-1 line-clamp-1 whitespace-nowrap overflow-hidden">{winner.game}</div>
                                    <div className="text-gray-200 flex items-center justify-center max-w-[200px] col-span-3 md:col-span-1">{winner.time}</div>
                                    <div className="text-gray-200 flex items-center justify-start font-medium max-w-[300px] col-span-4 md:col-span-1 whitespace-nowrap overflow-hidden">
                                        {truncateText(winner.prize, size.gsm ? 30 : 14)}
                                    </div>

                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

function truncateText(text: string, length: number) {
    if (text.length <= length) {
        return text;
    }

    return text.slice(0, length) + '\u2026'
}