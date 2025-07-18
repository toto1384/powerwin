import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useSize } from '@/utils/useSize'

import ConfettiExplosion from "react-confetti-explosion";
import { format } from "date-fns";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}


const scrollBar = `[&::-webkit-scrollbar]:w-6
					
					[&::-webkit-scrollbar-track]:border-r-[12px] [&::-webkit-scrollbar-thumb]:border-r-[12px]
					[&::-webkit-scrollbar-track]:border-l-[8px] [&::-webkit-scrollbar-thumb]:border-l-[8px]
					[&::-webkit-scrollbar-track]:border-t-[12px] [&::-webkit-scrollbar-track]:border-b-[12px]
					[&::-webkit-scrollbar-thumb]:border-[#202020] [&::-webkit-scrollbar-track]:border-[#202020] 
					[&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full

					[&::-webkit-scrollbar-track]:bg-[color:#2a2a2a] [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
					[&::-webkit-scrollbar-thumb]:from-transparent [&::-webkit-scrollbar-thumb]:via-[#838383] [&::-webkit-scrollbar-thumb]:to-transparent`

export default function Home() {

	const spinWinners = [
		{ participant: 'Hidden', time: '4-11 22:17', prize: '$5000 - Cartier Love Bracelet' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
		{ participant: 'Hidden', time: '4-11 22:17', prize: '$1000 - iPhone 16 Pro Max' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' }
	];

	const powerWinParticipants = [
		{ name: 'Hidden', time: '4-11 22:17', tickets: '929292292' },
		{ name: 'Love83', time: '4-11 22:17', tickets: '922292292' },
		{ name: 'Hidden', time: '4-11 22:17', tickets: '292929229' },
		{ name: 'Love83', time: '4-11 22:17', tickets: '202029828' }
	];

	const [activeTab, setActiveTab] = useState<"Home" | 'Competitions' | 'Winners' | 'Referral Win'>('Home')

	const data = {
		credit: 125.00,
		spins: 27,
		userName: "John Doe",
		userEmail: "johndoe@gmail.com",
		language: "EN"
	}

	const navBarIconSize = 'w-4 h-4'

	const tabBarClassName = (tab: typeof activeTab) => `rounded-full cursor-pointer text-lg flex items-center font-light justify-center border h-full border-white w-[23%] text-center ${activeTab == tab ? 'bg-[color:#787878] text-black' : 'bg-[color:#353535] text-white'}`

	const size = useSize(true)


	const prizesGrid = <div className="grid grid-cols-2 md:grid-cols-1 gap-2 justify-stretch">

		<div className="rounded-xl h-full p-[0.6px] bg-gradient-to-b from-white to-[#2b2b2b]">
			<div className="bg-gradient-to-b from-[#070707] to-[#0a0a0a] rounded-xl h-full px-3">
				<Image
					src={'/prize1.png'}
					className="aspect-square h-full object-contain rotate-90 " alt="" width={150} height={150}
				/>
			</div>
		</div>
		<div className="rounded-xl h-full p-[0.6px] bg-gradient-to-b from-white to-[#2b2b2b]">
			<div className="bg-gradient-to-b from-[#161616] to-[#141414] rounded-xl h-full px-3">
				<Image
					src={'/prize2.png'}
					className="aspect-square h-full object-contain " alt="" width={150} height={150}
				/>
			</div>
		</div>
		<div className="rounded-xl h-full p-[0.6px] bg-gradient-to-b from-white to-[#2b2b2b]">
			<div className="bg-gradient-to-b from-[#161616] to-[#141414] rounded-xl h-full px-3">
				<Image
					src={'/prize3.png'}
					className="aspect-square h-full object-contain " alt="" width={150} height={150}
				/>
			</div>
		</div>
		<div className="rounded-xl h-full p-[0.6px] bg-gradient-to-b from-white to-[#2b2b2b]">
			<div className="bg-gradient-to-b from-[#161616] to-[#141414] rounded-xl h-full px-3">
				<Image
					src={'/prize4.png'}
					className="aspect-square h-full object-contain " alt="" width={150} height={150}
				/>
			</div>
		</div>
	</div>


	const selectedPrize = <div className="rounded-xl h-full p-[0.6px] bg-gradient-to-b from-white to-[#2b2b2b] min-w-[35%] mb-5 ml-5">
		<div className="bg-gradient-to-b from-[#101010] to-[#1f1f1f] rounded-xl h-full flex flex-col">
			<h3 className="text-lg text-center pt-10">Cartier Love Bracelet</h3>
			<p className="text-xs text-center ">Cash alternative: $5000</p>
			<Image
				src={'/prize1.png'}
				className="aspect-square  object-contain md:scale-125 mt-[10%] md:mt-[25%] rotate-90 " alt="" width={300} height={150}
			/>
		</div>
	</div>


	return <div className="">
		{/* NAVBAR */}
		<div className="hidden md:flex flex-row relative">
			<div className="border-t border-l border-r border-white w-[25%] h-14 px-10 py-6 rounded-t-[3rem] bg-[color:#353535]">
				<Image alt="logo" width={400} height={200} src={'/logo.png'} />

			</div>

			<div className=" w-[50%] absolute m-auto left-0 right-0 h-[88px] px-3 pb-3 z-20 bg-[#0a0a0a] rounded-[3rem] flex flex-row items-stretch justify-between">

				<div
					onClick={() => setActiveTab('Home')}
					className={tabBarClassName('Home')}
				>Home</div>

				<div
					onClick={() => setActiveTab('Competitions')}
					className={tabBarClassName('Competitions')}
				>Competitions <Image src={'/icons/carretDown.svg'} alt="" className={"ml-2 " + (activeTab == 'Competitions' ? '' : 'dark:invert')} width={8} height={8} /></div>
				<div
					onClick={() => setActiveTab('Winners')}
					className={tabBarClassName('Winners')}
				>Winners</div>
				<div
					onClick={() => setActiveTab('Referral Win')}
					className={tabBarClassName('Referral Win')}
				>Referral Win</div>

			</div>

			{/* is there just for the padding */}
			<div className=" w-[50%] h-14 px-10 py-6 bg-transparent -z-10"></div>

			<div className="w-[50.12%] absolute m-auto left-0 right-0 border-b border-white border-l border-r z-10 h-10 mt-[52px] px-10 py-2 rounded-b-[3rem] bg-[color:#353535]"></div>

			<div className="border-t border-l border-r border-white w-[25%] h-14 px-6 py-4 rounded-t-[3rem] bg-[color:#353535] flex">

				<div className="overflow-visible w-full flex flex-row justify-between h-fit">

					{/* Wallet Section */}
					<div className="bg-gradient-to-b from-white to-[color:#414141] w-[39%] p-[0.8px] rounded-3xl">
						<div className="bg-[color:#414141] h-full px-5 py-1 rounded-3xl flex flex-col items-center text-center">

							<div className="flex mb-1 items-center justify-self-center">
								<Image alt="" width={40} height={40} src={'/icons/wallet.svg'} className={`${navBarIconSize} mr-2 text-white`} />
								<span className="text-white font-medium text-sm">Wallet</span>
							</div>

							<div className="text-white text-[size:13px]">
								<span className="opacity-80">Credit </span>
								<span className="font-light text-[size:16px]"> £{data.credit.toFixed(2)}</span>
							</div>

							<div className="text-white text-[size:13px]">
								<span className="opacity-80">Spins </span>
								<span className="font-light">{data.spins}</span>
							</div>
						</div>

					</div>

					{/* User Info Section */}
					<div className="bg-gradient-to-b from-white to-[color:#414141] w-[39%] p-[0.8px] rounded-3xl">
						<div className="bg-[color:#414141] px-5 h-full py-2 rounded-3xl flex flex-col items-center text-center">
							<div className="flex flex-col items-center gap-2">
								<Image alt="" width={40} height={40} src={'/icons/person.svg'} className={`${navBarIconSize} text-white`} />
								<div>
									<div className="text-white font-medium">{data.userName}</div>
									<div className="text-gray-300 text-xs">{data.userEmail}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-[17%]">
						<div className=" h-full flex flex-col justify-between">
							{/* Language Button */}
							<div className="bg-gradient-to-b from-white to-[color:#252525] h-[46%] p-[0.8px] rounded-xl">
								<div className="bg-[color:#252525]  rounded-xl h-full flex items-center justify-center">
									<span className="text-white font-medium ">{data.language}</span>
								</div>

							</div>

							{/* Control Button */}
							<div className="bg-gradient-to-b from-white to-[color:#252525] h-[46%] p-[0.8px] rounded-xl">
								<div className="bg-[color:#252525] rounded-xl h-full flex items-center justify-center">
									<Image alt="" width={40} height={40} src={'/icons/coin.svg'} className={`${navBarIconSize} text-white`} />
								</div>

							</div>

						</div>

					</div>

				</div>

			</div>
		</div>

		{/* MAIN CONTENT */}
		<div className="border-l border-r border-white w-full p-2 md:p-9 md:pt-24 bg-gradient-to-b from-[color:#353535] to-[color:#212121]">


			{/* NAVBAR MOBILE */}
			<div className="md:hidden mx-2 flex flex-row justify-between">
				<div className="">
					<Image alt="logo" width={200} height={100} src={'/logo.png'} />
				</div>

				<div className="flex flex-row items-center">
					<Image alt="logo" width={40} height={40} src={'/icons/socials/youtubeColor.svg'} />

					<div className="bg-gradient-to-r from-[#181818] to-[#222222] p-5 rounded ml-4">
						<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.5 1H11.5" stroke="white" stroke-width="0.7" stroke-linecap="round" />
							<path d="M0.5 5H11.5" stroke="white" stroke-width="0.7" stroke-linecap="round" />
							<path d="M0.5 9H11.5" stroke="white" stroke-width="0.7" stroke-linecap="round" />
						</svg>

					</div>

				</div>
			</div>

			<HeroSection />


			<div className="flex flex-row mt-32 justify-between">

				<Container borderClassName="w-full md:w-[49%]">
					<h3 className="text-3xl mb-8">Buy Tickets</h3>
					<div className="flex flex-row justify-around w-full space-x-2">

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center">
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-5 text-lg">Min</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center">
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-5 text-lg">10%</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center">
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-5 text-lg">25%</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center">
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-5 text-lg">50%</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center">
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-5 text-lg">Max</div>
						</div>
					</div>

					<div className="py-20 flex flex-row items-end w-full">

						<div className="aspect-square p-4 text-3xl">-</div>
						<DraggableProgressBar
							totalTickets={90000}
							// onValueChange={handleValueChange}
							className="mb-8 w-full"
						/>
						<div className="aspect-square p-4 text-3xl">+</div>
					</div>

					<button className="bg-gradient-to-b from-[#bf1213] to-[#300e0e] w-full rounded-xl text-2xl py-3">Participate Now - $312,5</button>
				</Container>


				<Container borderClassName={'w-[49%] max-h-[55vh] hidden md:block'} className={`overflow-y-scroll ${scrollBar}`} >
					<h3 className="text-4xl">Description</h3>

					<p className="py-6 text-xl">Model: Lamborghini Aventador LP 770-4 SVJ Cabrio</p>

					<p className="text-xl">Lamborghini Aventador SVJ Roadster is a limited-edition open-top supercar that blends extreme performance with unmistakable Italian design. Powered by a naturally aspirated 6.5L V12 engine delivering 770 horsepower, it accelerates from 0 to 100 km/h in just 2.9 seconds. With advanced aerodynamics (ALA 2.0 system), carbon fiber construction, and all-wheel drive, the SVJ Roadster offers an exhilarating driving experience both on the road and track—while letting you enjoy the raw sound of the V12 with the roof down.</p>

					<p className="text-xl pt-5">Lamborghini Aventador SVJ Roadster is a limited-edition open-top supercar that blends extreme performance with unmistakable Italian design. Powered by a naturally aspirated 6.5L V12 engine delivering 770 horsepower, it accelerates from 0 to 100 km/h in just 2.9 seconds. With advanced aerodynamics (ALA 2.0 system), carbon fiber construction, and all-wheel drive, the SVJ Roadster offers an exhilarating driving experience both on the road and track—while letting you enjoy the raw sound of the V12 with the roof down.</p>

				</Container>

			</div>

			<Container disablePadding borderClassName="mt-10" className="w-full flex flex-col md:flex-row" disableContainer={size.lmd}>
				<div className="w-full md:w-[49%] flex flex-row">
					<div className="w-full py-7">

						<h4 className="text-2xl text-center md:text-start mb-20 md:mb-0 md:ml-7">Spin to Win</h4>
						<SpinWidget />
					</div>
					{size.gsm && prizesGrid}
				</div>

				<div className="w-full md:w-[49%] md:flex flex-row hidden">
					{size.gmd && selectedPrize}

					<div className={`whitespace-pre-wrap ${scrollBar} pl-8 py-8 max-h-[600px] overflow-y-scroll`}>
						<h4 className="text-2xl">Instant Win</h4>
						<p>At PowerWin, you don't have to wait for the final draw to win! With our Instant</p>
						<p>Win system, you have the chance to walk away RIGHT NOW with a top-tier prize.</p>
						<p>How does it work?</p>
						<p>1. Choose one of the 4 available prizes:</p>
						<p>- Cartier Love Bracelet</p>
						<p>- Hublot Classic Fusion Titanium 38mm</p>
						<p>- iPhone 16 Pro Max 256GB</p>
						<p>- Hermes Birkin Bag</p>
						<p>2. Select the number of tickets (maximum 500) - the more you buy, the higher</p>
						<p>your win chance (up to 80%).</p>
						<p>3. Pay for your tickets and return to this page.</p>
						<p>4. You'll get one single Spin for the selected prize. If luck is on your side, you win it</p>
						<p>instantly!</p>
						<p>Important Rules:</p>
						<p>• You only get one Spin per purchase.</p>
						<p>• You can select only one prize from the 4 for each attempt.</p>
						<p>• Your win chance is clearly displayed before payment.</p>
						<p>Total prizes available in this round: $10,000</p>
						<p>(4x iPhone 16 Pro Max, 1x Cartier Love Bracelet, 1x Hublot Classic Fusion Titanium</p>
						<p>38mm, 1x Hermes Birkin Bag)</p>
					</div>
				</div>

				<div className="grid grid-cols-2 md:hidden">
					{prizesGrid}
					{selectedPrize}
				</div>
			</Container>



			{/* Table Content */}
			<div className=" mx-auto py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Spin to Win Winners */}
					<Container className="">

						<h2 className="text-2xl md:text-3xl text-center font-medium mb-6 md:text-start">Spin to Win Winners</h2>

						<div className="space-y-1">
							{/* Header */}
							<div className="grid grid-cols-3 gap-4 pb-3 text-sm">
								<div className="flex items-center text-xl gap-2">
									Participants
								</div>
								<div className="flex items-center text-xl gap-2">
									Time
								</div>
								<div className="flex items-center text-xl gap-2">
									Prize
								</div>
							</div>

							{/* gradient line */}
							<div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 my-2"></div>

							{/* Winners List */}
							<div className="space-y-2">
								{spinWinners.map((winner, index) => (
									<div key={index} className="grid grid-cols-3 gap-4 py-3 ">
										<div className="flex items-center gap-2">
											<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
												<Image src={'/icons/person.svg'} className="invert" alt="" width={12} height={12} />
											</div>
											<span className="text-sm">{winner.participant}</span>
										</div>
										<div className="">{winner.time}</div>
										<div className="">{winner.prize}</div>
									</div>
								))}
							</div>
						</div>
					</Container>

					{/* PowerWin Participants */}
					<Container className="">

						<h2 className="text-2xl md:text-3xl text-center font-medium mb-6 md:text-start">PowerWin Participants</h2>


						{/* Search Input */}
						<div className="mb-6">
							<input
								type="text"
								placeholder="Participant Name"
								className=" bg-[color:#3a3a3a] rounded-lg px-14 border-[0.5px] border-white py-3 text-white placeholder-white text-lg focus:outline-none text-center"
							/>
						</div>

						<div className="space-y-1">
							{/* Header */}
							<div className="grid grid-cols-3 gap-4 pb-3 text-sm">
								<div className="text-xl">Participants</div>
								<div className="text-xl">Time</div>
								<div className="text-xl">No. of Tickets</div>
							</div>

							<div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 my-2"></div>

							{/* Participants List */}
							<div className="space-y-2">
								{powerWinParticipants.map((participant, index) => (
									<div key={index} className="grid grid-cols-3 gap-4 py-3">
										<div className="flex items-center gap-2">
											<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
												<Image src={'/icons/person.svg'} className="invert" alt="" width={12} height={12} />
											</div>
											<span className="text-sm">{participant.name}</span>
										</div>
										<div className="">{participant.time}</div>
										<div className="">{participant.tickets}</div>
									</div>
								))}
							</div>
						</div>
					</Container>
				</div>
			</div>


		</div>

		<Footer />

	</div >


}


function HeroSection() {

	const size = useSize(true)

	const ongoingButton = <div className="flex h-fit items-center bg-gradient-to-b w-fit from-[#1d5a26] to-transparent mx-4 px-4 py-2 rounded-lg">
		<Image src={'/icons/radar.svg'} alt="" className="mr-2" width={10} height={10} />
		<span className="font-medium">Ongoing</span>
	</div>

	const chainlinkVrfButton = <button className="bg-gradient-to-b from-[#787878] to[#1c1c1c] px-4 py-2 md:px-3 md:py-1 rounded-lg border-[0.1px] text-sm border-[color:#353535] transition-colors">
		Chainlink VRF
	</button>

	const headerTextSection = <div className="flex md:flex-row items-center md:items-start flex-col mb-6 mt-10 md:mt-0">
		<div>
			<h1 className="text-3xl mb-2 whitespace-pre-wrap text-center md:text-start">Lamborghini Aventador LP {"\n"}770-4 SVJ Cabrio</h1>
			<p className="text text-gray-300 text-center md:text-start">
				Cash Alternative - <span className="">$500,000</span>
			</p>
		</div>
		<div className="flex flex-row w-fit mt-5 md:mt-0">
			{ongoingButton}
			{size.lmd && chainlinkVrfButton}
		</div>
	</div>

	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 19,
		hours: 1,
		minutes: 34,
		seconds: 26
	});

	const [isOngoing, setIsOngoing] = useState(true);
	const totalTickets = 90000;
	const soldTickets = 68157;
	const progressPercentage = (soldTickets / totalTickets) * 100;

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => {
				if (prev.seconds > 0) {
					return { ...prev, seconds: prev.seconds - 1 };
				} else if (prev.minutes > 0) {
					return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
				} else if (prev.hours > 0) {
					return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
				} else if (prev.days > 0) {
					return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
				}
				return prev;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return <div className="w-full flex flex-col-reverse md:flex-row">


		<div className=" text-white flex flex-col items-center pt-8 w-full  md:w-[50%]">
			<button className="md:hidden w-fit my-7 bg-gradient-to-b border-[0.8px] border-[color:#6e6e6e] from-[#292929] to-[#161616] px-4 py-3 rounded-lg text-sm transition-colors flex flex-row">
				Prize description
				<Image src={'/icons/arrowLink.svg'} className="md:ml-2" alt="" width={12} height={12} />
			</button>
			<div className="max-w-4xl px-5 md:px-0">
				{/* Header */}
				{size.gsm && headerTextSection}

				{/* Countdown Timer */}
				<div className="mb-8 ">
					<h3 className="mb">Competitions Ends In:</h3>
					<div className="flex items-center gap-2 mt-2">

						<div className={`text-xl md:text-2xl font-medium mb-1 ${timeLeft.days < 10 ? "w-3" : 'w-5'} text-end`}>{timeLeft.days}</div>
						<div className="mr-1 md:mr-4">Days</div>

						<div className={`text-xl md:text-2xl font-medium mb-1 ${timeLeft.hours < 10 ? "w-3" : 'w-5'} text-end`}>{timeLeft.hours}</div>
						<div className="mr-1 md:mr-4">Hours</div>

						<div className={`text-xl md:text-2xl font-medium mb-1 ${timeLeft.minutes < 10 ? "w-3" : 'w-5'} text-end`}>{timeLeft.minutes}</div>
						<div className="mr-1 md:mr-4">Minutes</div>

						<div className={`text-xl md:text-2xl font-medium mb-1 w-5`}>{timeLeft.seconds}</div>
						<div className="mr-1 md:mr-4">Seconds</div>

						{size.gsm && chainlinkVrfButton}
					</div>
				</div>

				{/* Information Cards */}
				<div className="space-y-4 mb-6">
					<div className="flex items-start gap-4">
						<Image src={'/icons/video.svg'} alt="" width={20} height={20} />
						<p className="text-lg">
							The winner will be selected using Chainlink VRF (Verifiable Random Function),
							ensuring a provably fair and tamper-proof draw.
						</p>
					</div>

					<div className="flex items-start gap-4">
						<Image src={'/icons/trophy.svg'} alt="" width={20} height={20} />
						<p className="text-lg">This competition has only 1 winner</p>
					</div>

					<div className="flex items-start gap-4">
						<Image src={'/icons/ticket.svg'} alt="" width={20} height={20} />
						<p className="text-lg">{totalTickets.toLocaleString()} Tickets</p>
					</div>
				</div>

				{/* Raffle Rules Button */}
				<div className="">
					<button className="bg-gradient-to-b border-[0.8px] border-[color:#6e6e6e] from-[#787878] to[#1c1c1c] px-8 py-2 rounded-lg text-sm transition-colors flex flex-row">
						Raffle Rules
						<Image src={'/icons/arrowLink.svg'} className="ml-2" alt="" width={12} height={12} />
					</button>
				</div>

				{/* Progress Section */}
				<div className="mb-8 relative">
					<div className="mb-4 absolute top-0 flex flex-col items-center md:pr-16" style={{ left: `${progressPercentage}%`, transform: "translateX(-50%)" }}>
						<span className="text-2xl">{progressPercentage.toFixed(2)}%</span>
						<div className="w-[2px] h-8 bg-gradient-to-b from-transparent to-[#531615]"></div>
					</div>

					{/* Progress Bar */}
					<div className="relative top-16 mb-4 md:mr-10">
						<div className="relative mb-4">
							{/* Tick marks */}
							<div className="absolute top-0 left-5 right-0 h-6 w-[95%] flex">
								{Array.from({ length: size.lmd ? 80 : 170 }, (_, i) => (
									<div
										key={i}
										className="flex-1 border-l my-auto border-[color:#6E6E6E] h-[60%]"
										style={{ borderLeftWidth: '1.5px' }}
									></div>
								))}
							</div>
							<div className="absolute inset-0 w-full rounded-full h-6 overflow-hidden z-10">
								<div
									className="h-full bg-gradient-to-r rounded-full border-[1px] border-[color:#8a8a8a] from-[#464646] to-[#94100f] transition-all duration-500 ease-out"
									style={{ width: `${progressPercentage}%` }}
								></div>
							</div>
						</div>

						{/* Ticket Counter */}
						<div className="relative top-10 text-center">
							<span className="text-lg font-light">
								{soldTickets.toLocaleString()}/{totalTickets.toLocaleString()}
							</span>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div className="max-w-[93vw] md:w-[50%] flex flex-col md:justify-end">
			{size.lmd && headerTextSection}
			<div className="relative w-full md:mt-50 h-[40vw] md:h-[412px]">
				<Image className="absolute left-0 right-0 bottom-[-5vw] md:bottom-[0vw] lg:bottom-[-4vw] scale-110" src={'/lambo.png'} width={974} height={522} alt=""></Image>
				<Image className="absolute left-0 right-0 mr-10 bottom-0 md:bottom-[5vw] lg:bottom-[1vw] scale-105" src={'/elipse.svg'} width={844} height={453} alt=""></Image>
				<div className="absolute bottom-[-5vw] md:bottom-0 lg:bottom-[-5vh] left-[50%] text-3xl md:text-4xl lg:text-6xl rounded-full p-0.5  " style={{ transform: "translateX(-50%)" }}>
					<div className="bg-opacity-30 backdrop-blur-xs border-b-[0.5px] font-light border-white backdrop-brightness-[1.2] px-10 py-5 rounded-full ">$8.50</div>

				</div>
			</div>
		</div>

	</div>
}

function Footer() {

	const size = useSize(true)
	const cryptoIcons = <div className="flex flex-row items-center space-x-7 md:space-x-3">
		<Image alt="logo" width={size.lmd ? 30 : 18} height={size.lmd ? 30 : 18} src={'/icons/crypto/bitcoin.svg'} />
		<Image alt="logo" width={size.lmd ? 30 : 18} height={size.lmd ? 30 : 18} src={'/icons/crypto/eth.svg'} />
		<Image alt="logo" width={size.lmd ? 30 : 18} height={size.lmd ? 30 : 18} src={'/icons/crypto/x.svg'} />
		<Image alt="logo" width={size.lmd ? 30 : 18} height={size.lmd ? 30 : 18} src={'/icons/crypto/solana.svg'} />
		<Image alt="logo" width={size.lmd ? 30 : 18} height={size.lmd ? 30 : 18} src={'/icons/crypto/usdt.svg'} />
	</div>

	const socialLinks = <div className="flex flex-row items-center space-x-2 justify-end">
		<div className="bg-gradient-to-b from-[#020202] aspect-square w-12 h-12 flex flex-row items-center justify-center to-[#191919] rounded-full">
			<Image alt="logo" width={20} height={20} src={'/icons/socials/instagram.svg'} />
		</div>

		<div className="bg-gradient-to-b from-[#020202] aspect-square w-12 h-12 flex flex-row items-center justify-center to-[#191919] rounded-full">
			<Image alt="logo" width={10} height={10} src={'/icons/socials/facebook.svg'} />
		</div>

		<div className="bg-gradient-to-b from-[#020202] aspect-square w-12 h-12 flex flex-row items-center justify-center to-[#191919] rounded-full">
			<Image alt="logo" width={20} height={20} src={'/icons/socials/youtube.svg'} />
		</div>

		<div className="bg-gradient-to-b from-[#020202] aspect-square w-12 h-12 flex flex-row items-center justify-center to-[#191919] rounded-full">
			<Image alt="logo" width={20} height={20} src={'/icons/socials/tiktok.svg'} />
		</div>

	</div>

	return <footer className="bg-gradient-to-b md:border-b md:border-r md:border-l px-2 md:px-8 pb-5 md:rounded-b-[3rem] from-[#171717] to-[#1b1b1b]">
		<div className="mx-auto px-4 py-8">
			<div className="grid grid-cols-2 lg:grid-cols-5 gap-1 md:gap-8">
				{/* Logo and Description */}
				<div className=" md:mr-10">
					<Image alt="logo" width={150} height={75} src={'/logo.png'} />
					<p className="text-white text-[9px] mt-5 leading-relaxed">
						PowerWin Crypto is the next-generation blockchain raffle platform.<br />
						Participate responsibly for exclusive rewards backed by our transparency powered by Chainlink VRF.<br />
						Win luxury prizes through secure, decentralized draws. Built on Web3.0 technology.
					</p>
					<div className="mt-4 hidden md:block">
						<span className=" text-sm">18+</span>
					</div>
				</div>

				{/* Links */}
				<div className="flex-col space-y-3 text-white font-medium mt-8 hidden md:flex">
					<a href="#" className="transition-colors flex items-center gap-2"> Home </a>
					<a href="#" className="transition-colors flex items-center gap-2"> Winners </a>
					<a href="#" className="transition-colors flex items-center gap-2"> FAQ </a>
					<a href="#" className="transition-colors flex items-center gap-2"> My Account </a>
				</div>

				<div className="flex-col space-y-3 font-medium text-white mt-8 hidden md:flex">
					<a href="#" className="transition-colors flex items-center gap-2"> Mobile App </a>
					<a href="#" className="transition-colors"> Referral Win </a>
					<a href="#" className="transition-colors"> Fairness </a>
					<a href="#" className="transition-colors flex items-center gap-2"> About Us </a>
				</div>

				<div className=" mt-8 hidden md:flex flex-col">
					<h3 className="text-lg">Support</h3>
					<a href="mailto:support@powerwin-crypto.com" className="text-[color:#144c76] underline text-sm transition-colors">
						powerwin@crypto.com
					</a>
				</div>
				<div className="flex flex-col items-center md:items-start md:pl-0">

					<button className="bg-[color:#2078bc] mb-10 md:mb-0 hover:bg-blue-700 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg h-fit w-fit flex items-center gap-2 md:mt-6 transition-colors text-xl font-medium">
						<Image alt="logo" className="mr-5" width={size.gsm ? 40 : 20} height={size.gsm ? 40 : 20} src={'/icons/socials/telegram.svg'} />
						Join Telegram
					</button>

					{size.lmd && socialLinks}


				</div>
			</div>


		</div>

		<div className="relative flex md:hidden flex-row items-center">
			<div className="ml-5">
				<span className=" text-sm">18+</span>
			</div>
			<div className="absolute left-0 right-0 w-fit mx-auto">
				{cryptoIcons}

			</div>
		</div>

		<div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-0.5 my-5"></div>

		<div className="grid px-4 grid-cols-2 md:grid-cols-4">
			{size.gsm && cryptoIcons}

			<div className="flex flex-row items-center justify-center space-x-3 w-full line-clamp-1 col-span-2">
				<p className="text-[color:#a3a3a3] text-[size:9px] line-clamp-1 md:text-sm">Privacy Policy</p>
				<p className="text-[color:#a3a3a3] text-[size:9px] line-clamp-1 md:text-sm">Terms & Conditions</p>
				<p className="text-[color:#a3a3a3] text-[size:9px] line-clamp-1 md:text-sm">Acceptable Use Policy</p>
				<p className="text-[color:#a3a3a3] text-[size:9px] line-clamp-1 md:text-sm">Cookie Policy</p>
			</div>

			{size.gsm && socialLinks}
		</div>
	</footer>
}

function Container({ children, className, borderClassName, disablePadding, disableContainer }: { className?: string, children: React.ReactNode, borderClassName?: string, disablePadding?: boolean, disableContainer?: boolean }) {

	if (disableContainer) return children

	return <div className={`p-[1px] bg-gradient-to-b from-[#fefefe] to-[#535353] rounded-xl ${borderClassName}`}>
		<div className={`${!disablePadding && "py-10 px-6"} rounded-xl bg-gradient-to-b from-[#202020] w-full h-full to-[#222222] ${className}`}>{children}</div>
	</div>
}


function DraggableProgressBar({
	totalTickets = 90000,
	onValueChange,
	className = ""
}: any) {
	const [percentage, setPercentage] = useState(75.73);
	const [isDragging, setIsDragging] = useState(false);
	const progressBarRef = useRef<HTMLDivElement>(null);

	const updateProgress = useCallback((clientX: number) => {
		if (!progressBarRef.current) return;

		const rect = progressBarRef.current.getBoundingClientRect();
		const newPercentage = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
		const newValue = Math.round((newPercentage / 100) * totalTickets);

		setPercentage(newPercentage);
		onValueChange?.(newValue, newPercentage);
	}, [totalTickets, onValueChange]);

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

	const currentValue = Math.round((percentage / 100) * totalTickets);

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
							className="bg-gradient-to-r h-6 mt-1 rounded-lg border-[1px] border-[color:#8a8a8a] from-[#464646] to-[#94100f] transition-all duration-1000 ease-out"
							style={{ width: `${percentage}%` }}
						>
						</div>

						{/* Invisible clickable overlay */}
						<div className="absolute inset-0 z-10"></div>

					</div>
				</div>

				<div className="absolute bottom-[-30px] flex flex-col items-center transition-all duration-1000 ease-out" style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}>
					<div className="relative flex flex-row">
						{/* <div className=" absolute w-[50%] bg-[color:#323232] left-0 inverted-border-radius-l rounded-tl-lg h3 text-transparent"></div> */}
						{/* <div className="absolute top-0 right-0 left-0">dljfsjldjlsdfls</div> */}
						<Tooltip width={150} height={70}> <div className="text-center mt-2">125 Tickets</div></Tooltip>
					</div>

					<div className="bg-white h-8 w-5 rounded-full flex flex-row items-center justify-center">
						<Image src={'/icons/dragHandle.svg'} alt="" width={10} height={10} />
					</div>
				</div>
			</div>


		</div>
	);
}



export const Tooltip = ({ children, height, width }: { children: React.ReactNode, height: number, width: number }) => {
	const enableCurves = true
	let stemHeight = 45
	let stemWidth = 1
	let borderRadius = 10
	let stemBorderRadius = 3
	let aFirsFour = `${borderRadius},${borderRadius} 0,0`
	let aFirsFourStem = `${stemBorderRadius + 15},${stemBorderRadius + 15} 0,0`


	const stylePath = useMemo(() => ({
		clipPath: `path("
					M 20,0 
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${width - borderRadius},0 
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${width},${borderRadius}

					${false ? `A ${aFirsFour},1` : 'L'} ${width},${height - stemHeight} 
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${width - borderRadius}, ${height - stemHeight + borderRadius} 
					L ${(width / 2) + (stemWidth / 2) + 2 * borderRadius},${height - stemHeight + borderRadius} 
					

					${enableCurves ? `A ${aFirsFourStem},0` : 'L'} ${(width / 2) + (stemWidth / 2) + stemBorderRadius},${height - stemHeight + 2 * borderRadius} 

					L ${(width / 2) + (stemWidth / 2) + stemBorderRadius},${height - borderRadius} 
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${(width / 2) + (stemWidth / 2)},${height}
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${(width / 2) - (stemWidth / 2) + stemBorderRadius},${height}
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${(width / 2) - (stemWidth / 2)},${height}


					${enableCurves ? `A ${aFirsFourStem},1` : 'L'} ${(width / 2) - (stemWidth / 2) - stemBorderRadius},${height - borderRadius}

					${false ? `A ${aFirsFourStem},0` : 'L'} ${(width / 2) - (stemWidth / 2) - stemBorderRadius},${height - stemHeight + 2 * borderRadius} 
					${enableCurves ? `A ${aFirsFourStem},0` : 'L'} ${(width / 2) - (stemWidth / 2) - 2 * borderRadius},${height - stemHeight + borderRadius}

					L ${borderRadius},${height - stemHeight + borderRadius}

					${enableCurves ? `A ${aFirsFour},1` : 'L'} 0, ${height - stemHeight} 
					${enableCurves ? `A ${aFirsFour},1` : 'L'} 0,${borderRadius}
					${enableCurves ? `A ${aFirsFour},1` : 'L'} ${borderRadius},0 Z")`.replaceAll('\n', ""),

		width: width, height: height
	}), [])

	// Add a unique ID to force re-rendering and avoid caching issues
	const pathId = useMemo(() => `tooltip-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, [format(Date.now(), "ss")[1]])

	return <div
		className="bg-gradient-to-b from-[#565656] via-[#56565647] to-transparent"
		style={stylePath}
		key={pathId} // Force re-render when pathId changes
	> {children}</div>
}


// SVG for the pointer icon
const PointerIcon = () => (
	<svg width="63" className="rotate-45" height="61" viewBox="0 0 63 61" fill="none" xmlns="http://www.w3.org/2000/svg">
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


function SpinWidget() {
	const [angleStart, setAngleStart] = useState(0);
	const [angleEnd, setAngleEnd] = useState(valueToAngle(50));


	const radius = 175

	// Animation duration in seconds
	const spinDuration = 5;

	// --- State ---
	const [rotation, setRotation] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [result, setResult] = useState<"WIN" | "LOSE" | null>(null);


	// Style for the rotating pointer container
	const pointerContainerStyle = {
		transform: `rotate(${rotation}deg)`,
		transition: `transform ${spinDuration}s ease-out`,
		width: radius * 2 + 40, height: radius * 2 + 40
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
		const fullRotations = Math.floor(Math.random() * 3) + 3; // 4 to 7 full spins
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
							<span className="text-4xl font-bold text-gray-400 animate-pulse">Spinning...</span>
						)}
						{!isSpinning && result && (
							<>
								<span className={`text-6xl font-bold uppercase ${result === 'WIN' ? 'text-green-400' : 'text-red-500'}`}>{result}!</span>
								<p className="text-gray-500 text-sm mt-1">Click Spin to play again</p>
							</>
						)}
						{!isSpinning && !result && (
							<>
								<p className="text-4xl  ">70,00% </p>
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
					className=" w-fit bg-[color:#3d3d3d] cursor-pointer transform transition-all duration-200 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100 rounded-xl flex flex-row items-center"
				>
					<Image src={'/icons/spin.svg'} className="mx-7" alt="" width={20} height={20} />
					<span>{isSpinning ? '...' : 'Demo Spin'}</span>
					<div className="bg-gradient-to-r from-[#353535] to-[#232323] h-full rounded-xl w-fit ml-5 pt-4 pb-4 px-6 border-l-[0.1px] border-b-[0.1px] border-white">1</div>
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

	const width = 25

	return (
		<div className="flex flex-col">
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
						setAngleStart(num)
					}} type={{ "t": 'dot', offset: 0.1 }} />
					<DotMovable circleRef={circleRef} width={width} radius={radius} angle={angleEnd} setAngle={(num) => {
						console.log("🚀 ~ DraggableDotOnCircle ~ num:", num)
						setAngleEnd(num)
					}} type={{ t: 'dot', offset: -0.1 }} />

				</div>
			</div>



		</div>
	);
}


// Helper to convert a 0-100 value to the internal angle format
const valueToAngle = (v: number) => {
	const angleRad = (v / 100) * 2 * Math.PI - Math.PI / 2;
	// Normalize to the -PI to PI range used by atan2
	return angleRad <= -Math.PI ? angleRad + 2 * Math.PI : angleRad;
};

// Helper to convert an internal angle to a 0-100 value
const angleToValue = (a: number) => {
	// Shift angle so 0 is at the top, and normalize to [0, 2PI]
	const normalizedAngle = (a + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI);
	// Convert radians to a 0-100 scale and round it
	const value = Math.round((normalizedAngle / (2 * Math.PI)) * 100);
	return value === 100 ? 0 : value; // Handle wraparound from 100 back to 0
};

function DotMovable({ circleRef, radius, angle, setAngle, type, width }: { width: number, radius: number, circleRef: any, angle: number, setAngle: (num: number) => void, type: { t: "dot", offset?: number } | { t: "line", size: number } }) {

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

		const newAngle = Math.atan2(dy, dx);
		setAngle(newAngle);
	} // Empty dependency array because it doesn't depend on component state

	const handleDragEnd = () => {
		window.removeEventListener("mousemove", handleDragMove);
		window.removeEventListener("mouseup", handleDragEnd);
		window.removeEventListener("touchmove", handleDragMove);
		window.removeEventListener("touchend", handleDragEnd);
	}

	const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
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
			className="absolute top-0 left-0 w-full h-full rounded-full cursor-pointer"
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
			className="absolute w-8 h-8 cursor-pointer "
			style={{
				left: `${x - 16}px`,
				top: `${y - 16}px`,
			}}
			onMouseDown={handleDragStart}
			onTouchStart={handleDragStart}
		><div className="w-2 h-2 bg-white rounded-full m-auto mt-3"></div></div>
	}

}