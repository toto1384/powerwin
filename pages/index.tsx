import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useSize } from '@/utils/useSize'



import React from "react";
import NavBar, { NavBarMobile } from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { angleToValue, SpinWidget, valueToAngle } from "@/components/spinWidget";
import { DraggableProgressBar } from "@/components/draggableProgressBar";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const scrollBarNoBorder = ` 
					[&::-webkit-scrollbar]:w-3

					[&::-webkit-scrollbar-track]:m-3

					[&::-webkit-scrollbar-track]:p-2
					[&::-webkit-scrollbar-track]:bg-clip-padding
					[&::-webkit-scrollbar-track]:border-5
					[&::-webkit-scrollbar-track]:border-transparent

				
					
					
					[&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full

					[&::-webkit-scrollbar-track]:bg-[color:#2a2a2a] scrollbar-gradient`



export default function Home() {

	const spinWinners = [
		{ participant: 'Hidden', time: '4-11 22:17', prize: '$5000 - Cartier Love Bracelet' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
		{ participant: 'Hidden', time: '4-11 22:17', prize: '$1000 - iPhone 16 Pro Max' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
		{ participant: 'Love83', time: '4-11 22:17', prize: '$8000 - Hermes Birkin' },
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
		{ name: 'Love83', time: '4-11 22:17', tickets: '202029828' },
		{ name: 'Hidden', time: '4-11 22:17', tickets: '929292292' },
		{ name: 'Love83', time: '4-11 22:17', tickets: '922292292' },
		{ name: 'Hidden', time: '4-11 22:17', tickets: '292929229' },
		{ name: 'Love83', time: '4-11 22:17', tickets: '202029828' }
	];

	const [bigPrize, setBigPrize] = useState(0)


	const [angle, setAngle] = useState<{ start: number, end: number }>({ start: 0, end: valueToAngle(50) })

	function setPercentage(n: number) {

		setAngle((prev) => {
			const currentSize = (angleToValue(prev.end) < angleToValue(prev.start) ? angleToValue(prev.end) + 100 : angleToValue(prev.end)) - angleToValue(prev.start)
			const difference = (n * 0.8 - currentSize) / 2

			return { start: valueToAngle(angleToValue(prev.start) - difference), end: valueToAngle(angleToValue(prev.end) + difference) }
		})
	}

	return <div className="flex flex-col items-center">
		{/* NAVBAR */}
		<NavBar />

		{/* MAIN CONTENT */}
		<div className="border-l border-r border-white w-full p-2 md:p-9 md:pt-24 max-w-[1800px]" style={{
			background: "linear-gradient(162.58deg, #323232 0%, #000000 100%)"
		}}>


			{/* NAVBAR MOBILE */}
			<NavBarMobile />

			<HeroSection prize={bigPrize} setPrize={setBigPrize} />


			<div className=" mt-32 grid gap-6 h-fit" style={{ gridTemplateColumns: "repeat(19, minmax(0, 1fr)" }}>

				<Container disablePadding borderClassName="col-span-[18] md:col-span-[9]" className="px-8 py-8">
					{/* <div className="flex flex-row items-center justify-between">
						<h3 className="text-3xl mb-8">Ce Brand Este Aceasta Masina?</h3>
						<p className="mb-8 aspect-square text-2xl font-light px-4 pt-2 bg-white/20 border-white border-[1px] rounded">?</p>
					</div> */}

					<h3 className="text-3xl mb-8">Buy Tickets</h3>

					<div className="flex flex-row justify-around w-full space-x-2">

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center cursor-pointer" onClick={() => setPercentage(5 / 0.8)}>
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-2.5 text-lg">Min</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center cursor-pointer" onClick={() => setPercentage(10 / 0.8)}>
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-2.5 text-lg">10%</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center cursor-pointer" onClick={() => setPercentage(25 / 0.8)}>
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-2.5 text-lg">25%</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center cursor-pointer" onClick={() => setPercentage(50 / 0.8)}>
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-2.5 text-lg">50%</div>
						</div>

						<div className="p-[1px] bg-gradient-to-b w-[23%] from-[color:#9C9C9C] to-[color:#3a3a3a] rounded-xl flex flex-row items-center justify-center cursor-pointer" onClick={() => setPercentage(100)}>
							<div className="bg-[color:#3a3a3a] rounded-xl w-full h-full text-center py-2.5 text-lg">Max</div>
						</div>
					</div>
					{/* <div className="grid grid-cols-3 gap-2">
						{cars.map(i => <div className="bg-gradient-to-b text-[22px] cursor-pointer from-white rounded-lg to-white/20 p-[0.5px]" onClick={() => setSelectedCar(i.name)} style={{

						}}>
							<div className={`px-6 py-5 rounded-lg text-center ${i.name === selectedCar ? 'bg-gradient-to-b from-[#0f0f0f] to-[#1d1d1d]' : 'bg-gradient-to-b from-[#2d2d2d] to-[#2f2f2f]'}`}>{i.name}</div>
						</div>
						)}

					</div> */}

					<div className="grid grid-cols-11 gap-2 mt-5">
						<div className="col-span-3 w-full flex flex-row justify-end">
							<p className="right-0 w-fit aspect-square px-3 flex flex-col items-center justify-center rounded-xl linehe select-none cursor-pointer text-4xl font-extralight bg-[color:#0f0f0f] text-center"><span className="translate-y-[1.5px]" onClick={() => {
								const percentage = Math.round(125 / 100 * ((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8)

								setPercentage((100 / 125 * percentage) - 1)
							}}>-</span></p>

						</div>
						<Container disablePadding borderClassName="col-span-5" disableBgBr rounded="rounded-xl" className="  bg-[color:#3a3a3a] rounded-xl">
							<input
								type="text"
								className=" text-center w-full text-sm h-full focus:outline-none"
								placeholder="Introdu numarul de bilete"
								value={Math.round(125 / 100 * ((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8)}
								onChange={(e) => {
									setPercentage(100 / 125 * Number(e.target.value))
								}}
							/>
						</Container>
						<div className="col-span-3 w-full flex flex-row">
							<p className="w-fit aspect-square px-3 flex flex-col items-center justify-center rounded-xl linehe select-none cursor-pointer text-4xl font-extralight bg-[color:#0f0f0f] text-center"><span className="translate-y-[2.5px]" onClick={() => {
								const percentage = Math.round(125 / 100 * ((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8)

								setPercentage((100 / 125 * percentage) + 1)
							}}>+</span></p>
						</div>
					</div>


					<div className="pt-20 mb-5 flex flex-row items-end w-full">

						<p className="aspect-square flex flex-col items-center justify-center col-span-3 px-3 rounded-xl select-none cursor-pointer text-4xl font-extralight bg-[color:#0f0f0f] text-center mb-3 mr-4"><span className="translate-y-[1.5px]" onClick={() => {
							const percentage = Math.round(125 / 100 * ((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8)

							setPercentage((100 / 125 * percentage) - 1)
						}}>-</span></p>

						<DraggableProgressBar
							totalTickets={90000}
							percentage={((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8}
							setPercentage={setPercentage}
							className="mb-8 w-full" tooltipText={`${Math.round(125 / 100 * ((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8)} Tickets`}
						/>

						<p className="aspect-square flex flex-col items-center justify-center col-span-3 px-3 rounded-xl select-none cursor-pointer text-4xl font-extralight bg-[color:#0f0f0f] text-center mb-3 ml-4"><span className="translate-y-[2.5px]" onClick={() => {
							const percentage = Math.round(125 / 100 * ((angleToValue(angle.end) < angleToValue(angle.start) ? angleToValue(angle.end) + 100 : angleToValue(angle.end)) - angleToValue(angle.start)) / 0.8)

							setPercentage((100 / 125 * percentage) + 1)
						}}>+</span></p>
					</div>

					<button className="bg-gradient-to-b from-[#bf1213] to-[#300e0e] w-full rounded-xl text-2xl py-3">Participate Now - $312,5</button>
				</Container>


				<Container borderClassName={`col-span-[10] hidden md:block contain-size`} disablePadding className={`py-3 pl-7 pr-5`} >
					<div className={`overflow-y-scroll max-h-full ${scrollBarNoBorder} `}>
						<h3 className="text-3xl mt-5 max-w-[60ch]">Description</h3>

						<p className="py-6 text-lg max-w-[60ch]">Model: Lamborghini Aventador LP 770-4 SVJ Cabrio</p>

						<p className="text-lg max-w-[60ch]">Lamborghini Aventador SVJ Roadster is a limited-edition open-top supercar that blends extreme performance with unmistakable Italian design. Powered by a naturally aspirated 6.5L V12 engine delivering 770 horsepower, it accelerates from 0 to 100 km/h in just 2.9 seconds. With advanced aerodynamics (ALA 2.0 system), carbon fiber construction, and all-wheel drive, the SVJ Roadster offers an exhilarating driving experience both on the road and track—while letting you enjoy the raw sound of the V12 with the roof down.</p>

						<p className="text-lg pt-5 max-w-[60ch]">Lamborghini Aventador SVJ Roadster is a limited-edition open-top supercar that blends extreme performance with unmistakable Italian design. Powered by a naturally aspirated 6.5L V12 engine delivering 770 horsepower, it accelerates from 0 to 100 km/h in just 2.9 seconds. With advanced aerodynamics (ALA 2.0 system), carbon fiber construction, and all-wheel drive, the SVJ Roadster offers an exhilarating driving experience both on the road and track—while letting you enjoy the raw sound of the V12 with the roof down.</p>

					</div>

				</Container>

			</div>

			<PrizesComponent angle={angle} setAngle={setAngle} />



			{/* Table Content */}
			<div className=" mx-auto py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Spin to Win Winners */}
					<Container className="pl-5 md:pl-10 pr-2.5 pt-10" disablePadding>

						<h2 className="text-2xl md:text-3xl text-center font-medium mb-6 md:text-start">Spin to Win Winners</h2>

						{/* Search Input */}
						<div className="flex flex-row items-center justify-between mb-6 md:mr-10">
							<div className="">
								<input
									type="text"
									placeholder="Participant Name"
									className=" bg-[color:#3a3a3a] rounded-lg px-4 md:px-14 border-[0.5px] border-white py-2.5 text-white placeholder-white text-sm md:text-lg focus:outline-none text-center"
								/>
							</div>
							<Container className="bg-gradient-to-b from-[#f3f3f3]/30 to-transparent rounded-lg md:px-10 pt-1.5 pb-2.5 md:pb-2.5 md:pt-2.5 text-white placeholder-white text-lg focus:outline-none text-center flex flex-row items-center"
								disableBgBr rounded="rounded-lg" miniBorder reverseBorder>
								<Image src={'/icons/scale.svg'} alt="" width={20} height={17} />
								<span className="ml-2">Provably Fair</span>

							</Container>
						</div>
						<div className={`space-y-1 max-h-[40vh] overflow-y-scroll ${scrollBarNoBorder}`}>
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
					<Container className="pl-5 md:pl-10 pr-2.5 pt-10" disablePadding>

						<h2 className="text-2xl md:text-3xl text-center font-medium mb-6 md:text-start">PowerWin Participants</h2>


						{/* Search Input */}
						<div className="mb-6">
							<input
								type="text"
								placeholder="Participant Name"
								className=" bg-[color:#3a3a3a] rounded-lg px-4 md:px-14 border-[0.5px] border-white py-3 text-white placeholder-white text-sm md:text-lg focus:outline-none text-center"
							/>
						</div>

						<div className={`space-y-1 max-h-[40vh] overflow-y-scroll ${scrollBarNoBorder}`}>
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

function PrizesComponent({ angle, setAngle }: { angle: { start: number, end: number }, setAngle: React.Dispatch<React.SetStateAction<{ start: number, end: number }>> }) {

	const [currentIndex, setCurrentIndex] = useState(0);
	const size = useSize(true)

	const prizes = [
		{ img: '/prize1.png', name: 'Cartier Love Bracelet', className: 'scale-125 rotate-90', selectedClassName: 'rotate-90 md:scale-150 scale-75 md:pl-10' },
		{ img: '/prize2.png', name: 'Hermes Birkin', className: 'scale-175 md:scale-150', selectedClassName: 'scale-[1.4] md:scale-150' },
		{ img: '/prize3.png', name: 'iPhone 16 Pro Max', className: 'scale-[2.5] md:scale-175', selectedClassName: 'scale-125 md:scale-200' },
		{ img: '/prize4.png', name: 'Bag', className: 'scale-[1.5] md:scale-125', selectedClassName: 'scale-125' },
	]


	const prizesGrid = <div className="grid grid-cols-2 md:grid-cols-1 gap-2 justify-stretch">
		{prizes.map((i, index) => <Container disablePadding disableBgBr rounded="rounded-xl" className={`rounded-xl py-6 px-6 md:px-8 h-full ${currentIndex == index ? 'bg-gradient-to-b from-[#070707] to-[#0a0a0a]' : 'bg-[color:#595959]/15'}`} onClick={() => setCurrentIndex(index)}>

			<Image
				onClick={() => setCurrentIndex(index)}
				src={i.img}
				className={`aspect-square pointer-events-none h-full object-contain ${i.className}`} alt="" width={size.gmd ? 150 : 250} height={size.gmd ? 150 : 250}
			/>

		</Container>)}

	</div>




	const selectedPrizeComponent = <Container disableBgBr disablePadding rounded="rounded-xl" className="rounded-xl bg-gradient-to-b relative from-black to-black/0" borderClassName="mb-5 ml-5 min-w-[35%]">

		<h3 className="text-lg text-center pt-2 md:pt-10">{prizes[currentIndex].name}</h3>
		<p className="text-xs text-center ">Cash alternative: $5000</p>
		{/* Current image */}

		{prizes.map((i, ind) => <img
			src={i.img}
			className={`aspect-square pointer-events-none absolute object-contain bottom-[5%] w-[270px] h-[130px] md:w-fit md:h-fit md:bottom-[25%] center object-center transition-opacity duration-200  ${ind == currentIndex ? "opacity-100" : "opacity-0"} ${i.selectedClassName} `}
			alt=""
		// width={300} height={150}
		/>)}


	</Container>



	return <Container disablePadding borderClassName="mt-10" className="w-full overflow-x-clip flex flex-col md:flex-row md:justify-center" disableContainer={size.lmd}>
		<div className="w-full md:w-[49%] flex flex-row overflow-x-clip">
			<div className="w-full py-7">

				<h4 className="text-2xl text-center md:text-start mb-20 md:mb-0 md:ml-7">Spin to Win</h4>
				<SpinWidget
					angleEnd={angle.end} angleStart={angle.start}
					setAngleEnd={(e) => setAngle((prev) => ({ start: prev.start, end: e }))}
					setAngleStart={(s) => setAngle((prev) => ({ end: prev.end, start: s }))} />
			</div>
			{size.gsm && prizesGrid}
		</div>

		<div className="w-full md:w-[49%] md:flex flex-row hidden">
			{size.gmd && selectedPrizeComponent}

			<div className={`whitespace-pre-wrap ${scrollBarNoBorder} pl-8 py-8 max-h-[600px] overflow-y-scroll`}>
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

		<div className="grid grid-cols-2 md:hidden overflow-x-clip">
			{prizesGrid}
			{selectedPrizeComponent}
		</div>
	</Container>
}


function HeroSection({ prize, setPrize }: { prize: number, setPrize: (f: (n: number) => number) => void }) {

	const prizes = [
		(imgCLN: string) => <>
			<Image className={`absolute left-0 right-0 mr-10 bottom-0 md:bottom-[5%] lg:bottom-[10%] scale-105 ${imgCLN}`} src={'/elipse.svg'} width={844} height={453} alt=""></Image>
			<Image className={`absolute left-0 right-0 bottom-[-5vw] md:bottom-[0vw]  lg:bottom-[-10%] scale-110 ${imgCLN}`} src={'/lambo.png'} width={974} height={522} alt=""></Image>
		</>,

		(imgCLN: string) => <>
			<Image className={`absolute left-0 right-0 bottom-[-5vw] aspect-[1.55] md:bottom-[0%] rounded-xl overflow-clip scale-75 md:scale-[0.86] ${imgCLN}`} src={'/mansion.png'} width={897} height={536} alt="" />
		</>,

		(imgCLN: string) => <>
			<Image className={`absolute left-0 right-0 mr-10 bottom-0 md:bottom-[5%] lg:bottom-[10%] ${imgCLN}`} src={'/elipse.svg'} width={844} height={453} alt=""></Image>
			<Image className={`absolute left-0 right-0 bottom-[-5vw] md:bottom-[12%] mx-auto rounded-lg scale-75 ${imgCLN}`} src={'/watch.png'} width={441} height={748} alt="" />
		</>
	]

	const size = useSize(true)

	const ongoingButton = <div className="flex h-fit items-center bg-gradient-to-b w-fit from-[#1d5a26] via-[#28452d] to-transparent mx-4 px-[17px] py-1.5 rounded-lg">
		<Image src={'/icons/radar.svg'} alt="" className="mr-3" width={10} height={10} />
		<span className="font-medium">Ongoing</span>
	</div>

	const chainlinkVrfButton = <button className="bg-gradient-to-b from-[#787878] to[#1c1c1c] px-4 py-2 md:px-[18px] md:py-1.5 rounded-lg border-[1px] text-sm border-[color:#464646] transition-colors">
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
						<Image src={'/icons/video.svg'} className="mt-2" alt="" width={20} height={20} />
						<p className="text-lg">
							The winner will be selected using Chainlink VRF (Verifiable Random Function),
							ensuring a provably fair and tamper-proof draw.
						</p>
					</div>

					<div className="flex items-center gap-4">
						<Image src={'/icons/trophy.svg'} alt="" width={20} height={20} />
						<p className="text-lg">This competition has only 1 winner</p>
					</div>

					<div className="flex items-center gap-4">
						<Image src={'/icons/ticket.svg'} alt="" width={20} height={20} />
						<p className="text-lg">{totalTickets.toLocaleString()} Tickets</p>
					</div>
				</div>

				{/* Raffle Rules Button */}
				<div className="">
					<button className="bg-gradient-to-b border-[0.3px] border-[color:#a6a6a6] from-[#6b6b6b] to-transparent px-8 py-2 rounded-lg text-sm transition-colors flex flex-row items-center">
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
							<div className="absolute top-0 left-2 right-0 h-6 w-[95%] flex">
								{Array.from({ length: size.lmd ? 80 : 170 }, (_, i) => (
									<div
										key={i}
										className="flex-1 border-l my-auto border-[color:#6E6E6E] h-[60%]"
										style={{ borderLeftWidth: '1.5px' }}
									></div>
								))}
							</div>
							<div className="absolute inset-0 w-full rounded-full h-[26px] overflow-hidden z-10">
								<div
									className="h-full bg-gradient-to-r rounded-full border-[0.7px] backdrop-blur-[2.5px] border-white from-white/10 to-[#94100f] transition-all duration-200 ease-out"
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

		<div className="max-w-[93vw] md:w-[50%] flex flex-col mx-auto md:justify-end" onClick={() => setPrize(prev => prev == 0 ? 1 : prev == 1 ? 2 : 0)}>
			{size.lmd && headerTextSection}
			<div className="relative w-full md:mt-50 h-[40vw] md:h-[412px]">
				{prizes.map((i, ind) => prizes[prize](`transition-opacity duration-500  ${ind == prize ? "opacity-100" : "opacity-0"}`))}
				<div className="absolute bottom-[-5vw] md:bottom-0 lg:bottom-[-5%] left-[50%] text-[26px] md:text-4xl lg:text-6xl rounded-full p-0.5  " style={{
					transform: "translateX(-50%)",
				}}>
					<div className="bg-opacity-30 backdrop-blur-[5px] border-b-[0.7px] font-light border-white backdrop-brightness-[1.3] px-6 py-[6px] md:px-16 md:py-[24px] rounded-full ">$8.50</div>

				</div>
			</div>
		</div>

	</div>
}





