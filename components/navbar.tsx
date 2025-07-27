import Image from "next/image";
import PWPopover from "./pwpover";
import { Popover } from "radix-ui";
import { useState } from "react";


export default function NavBar() {

    const navBarIconSize = 'w-4 h-4'

    const [activeTab, setActiveTab] = useState<"Home" | 'Competitions' | 'Winners' | 'Referral Win'>('Home')

    const data = {
        credit: 125.00,
        spins: 27,
        userName: "John Doe",
        userEmail: "johndoe@gmail.com",
        language: "EN"
    }



    const tabBarClassName = (tab: typeof activeTab) => `rounded-full cursor-pointer text-lg flex items-center font-light justify-center border h-full border-white w-[23%] text-center ${activeTab == tab ? 'bg-[color:#787878] text-black' : 'bg-[color:#353535] text-white'}`

    return <div className="hidden md:flex flex-row relative max-w-[1800px] w-full mt-2">
        <div className="border-t border-l border-r border-white w-[25%] h-14 px-10 py-6 rounded-t-[3rem] bg-gradient-to-r from-[#323232] to-[#303030]">
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
            >Competitions
                {/* <Image src={'/icons/carretDown.svg'} alt="" className={"ml-2 " + (activeTab == 'Competitions' ? '' : 'dark:invert')} width={8} height={8} /> */}
            </div>
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

        <div className="w-[50.12%] absolute m-auto left-0 right-0 border-b border-white border-l border-r z-10 h-10 mt-[52px] px-10 py-2 rounded-b-[3rem] bg-[color:#303030]"></div>

        <div className="border-t border-l border-r border-white w-[25%] h-14 px-6 py-4 rounded-t-[3rem] bg-gradient-to-r to-[#2a2a2a] from-[#2c2c2c] flex">

            <div className="overflow-visible w-full flex flex-row justify-between h-fit">

                {/* Wallet Section */}
                <PWPopover popoverChildren={
                    <div className="flex flex-row p-8">
                        <div className="flex flex-col mt-3 mr-8 justify-between">
                            <div className="flex flex-col h-fit font-medium">
                                <h4 className="text-[color:#b0b0b0] text-lg mb-3">Account Settings</h4>
                                <p className="text-lg my-3">Tickets</p>
                                <p className="text-lg my-3">My Prizes</p>
                                <p className="text-lg my-3">Wallet</p>
                                <p className="text-lg my-3">Transactions</p>
                                <p className="text-lg my-3">Account</p>
                                <div className="text-lg my-3 -ml-1 p-[0.5] bg-gradient-to-b from-[] to-white rounded-xl">
                                    <div className="px-4 py-2 bg-[color:#1c1c1c] rounded-xl">
                                        Affiliate
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col h-fit font-medium">
                                <div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-[1px] my-5 mb-10"></div>
                                <div className="flex flex-row items-center font-medium text-xl">
                                    <p className="mr-5">Notifications</p>
                                    <Image alt="" width={45} height={45} src={'/icons/notification.svg'} className={`${navBarIconSize} mr-2 text-white`} />

                                </div>
                            </div>
                        </div>

                        <div className="flex-col">
                            <div className="flex flex-row w-full justify-between mb-5 mt-1">
                                <div className="flex flex-row items-center">
                                    <h3 className="text-2xl font-medium mx-5">Affiliate</h3>
                                    <button className="bg-gradient-to-b from-[#222222] to-[#1d1d1d] text-sm rounded-lg border-[0.5px] border-[#4d4d4d] flex flex-row px-3 py-3">
                                        <svg width="17" height="20" viewBox="0 0 35 40" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6205 0.5H16.265C12.9329 0.5 10.2922 0.5 8.22761 0.788617C6.10067 1.08503 4.37986 1.70907 3.02361 3.11511C1.66547 4.52114 1.0629 6.3055 0.777673 8.50913C0.5 10.6504 0.5 13.3864 0.5 16.84V28.2248C0.5 31.1656 2.23781 33.6851 4.70664 34.7421C4.58009 32.9675 4.58008 30.4811 4.58008 28.4101V18.64C4.58008 16.1419 4.58008 13.987 4.80298 12.2631C5.04287 10.4144 5.58311 8.64368 6.96958 7.20645C8.35605 5.76921 10.0655 5.20953 11.8487 4.95992C13.5109 4.7298 15.5888 4.7298 18.0009 4.7298H23.7999C26.2102 4.7298 28.2842 4.7298 29.9484 4.95992C29.4499 3.64611 28.5795 2.51786 27.4508 1.7223C26.322 0.92674 24.9872 0.500791 23.6205 0.5Z" fill="white" />
                                            <path d="M7.2998 18.8229C7.2998 13.5069 7.2998 10.8489 8.89406 9.19716C10.4864 7.54541 13.0497 7.54541 18.18 7.54541H23.6201C28.7486 7.54541 31.3137 7.54541 32.908 9.19716C34.5023 10.8489 34.5004 13.5069 34.5004 18.8229V28.2225C34.5004 33.5385 34.5004 36.1965 32.908 37.8483C31.3137 39.5 28.7486 39.5 23.6201 39.5H18.18C13.0516 39.5 10.4864 39.5 8.89406 37.8483C7.2998 36.1965 7.2998 33.5385 7.2998 28.2225V18.8229Z" fill="white" />
                                        </svg>

                                        Affiliate Link
                                    </button>
                                </div>
                                <Popover.Close>
                                    <div className="aspect-square border-[0.2px] rounded-lg border-white m-auto bg-[color:#1f1f1f]">
                                        <Image alt="" width={40} height={40} src={'/icons/close.svg'} className={`${navBarIconSize} m-4  text-white`} />
                                    </div>
                                </Popover.Close>
                            </div>


                            <div className="max-w-7xl mx-auto">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 mb-4">
                                    {[
                                        { label: 'Your Referral Code', value: 'dsdsadas' },
                                        { label: 'Total Deposited', value: '$0.00' },
                                        { label: 'Total Earnings', value: '$0.00' },
                                        { label: 'Users Brought', value: '0' },
                                        { label: 'Total Opened', value: '$0.00' },
                                        { label: 'Unclaimed Earnings', value: '$0.00' }
                                    ].map((stat, index) => (
                                        <div key={index} className="bg-[color:#171717] rounded min-w-[250px] p-4">
                                            <h3 className=" text-sm mb-5">{stat.label}</h3>
                                            <p className="text-white text-2xl font-medium">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Claim Section */}
                                <div className=" rounded-lg  mb-4">
                                    <h2 className="text-white text-xl mb-4">Enter amount to claim</h2>
                                    <div className="flex gap-2 items-end">
                                        <div className="p-[0.5px] w-fit min-w-[250px] bg-gradient-to-b from-[#5d5d5d] to-white rounded-lg">
                                            <input
                                                type="number"
                                                placeholder="0"
                                                className="w-full bg-[color:#111111] border border-gray-600 rounded-lg px-3 py-1 text-white placeholder-white focus:outline-none focus:ring-2  focus:border-transparent"
                                            />
                                        </div>
                                        <button
                                            className="bg-gradient-to-b from-[#868686] to-transparent text-white px-14 py-1.5 rounded-lg font-medium transition-colors"
                                        >
                                            Claim
                                        </button>
                                        <button
                                            className="bg-[color:#101010] text-gray-400 hover:text-white px-10 py-1.5 rounded-lg font-medium transition-colors"
                                        >
                                            Claim All
                                        </button>
                                    </div>
                                </div>

                                {/* Commission Table */}
                                <div className="bg-[color:#111111] rounded-lg overflow-hidden pb-5">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-[#b7b7b7] text-sm">
                                                    <th className="text-left p-4  font-medium">Username</th>
                                                    <th className="text-center p-4  font-medium">Commission</th>
                                                    <th className="text-right p-4  font-medium">Deposit Amount</th>
                                                </tr>
                                                <tr >
                                                    <td colSpan={3}><div className="w-full bg-gradient-to-l from-transparent via-white to-transparent h-[1px] my-2"></div></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { username: 'DPLpwldpwldpdwdwl', depositAmount: '$10.000', commission: '$1000' },
                                                    { username: 'DPLpwldpwldpdwdwl', depositAmount: '$10.000', commission: '$1000' },
                                                    { username: 'DPLpwldpwldpdwdwl', depositAmount: '$10.000', commission: '$1000' }
                                                ].map((row, index) => (
                                                    <tr key={index} className=" font-medium">
                                                        <td className="py-1 px-4 text-white">{row.username}</td>
                                                        <td className="py-1 px-4 text-white text-center">{row.depositAmount}</td>
                                                        <td className="py-1 px-4 text-white text-right">{row.commission}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                }>
                    <div className="bg-gradient-to-b cursor-pointer from-white to-[color:#414141] w-[39%] p-[0.8px] rounded-3xl">
                        <div className="bg-gradient-to-b from-[#3b3b3b] to-[#323232] h-full px-5 py-1 rounded-3xl flex flex-col items-center text-center">

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
                </PWPopover>

                {/* User Info Section */}
                <div className="bg-gradient-to-b from-white cursor-pointer to-[color:#414141] w-[39%] p-[0.8px] rounded-3xl">
                    <div className="bg-gradient-to-b from-[#3b3b3b] to-[#323232] px-5 h-full py-2 rounded-3xl flex flex-col items-center text-center">
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
                        <div className="bg-gradient-to-b from-white to-[color:#3e3e3e] h-[46%] p-[0.8px] rounded-xl">
                            <div className="bg-gradient-to-b from-[#3b3b3b] to-[#323232]  rounded-xl h-full flex items-center justify-center">
                                <span className="text-white font-medium ">{data.language}</span>
                            </div>

                        </div>

                        {/* Control Button */}
                        <div className="bg-gradient-to-b from-white to-[color:#3e3e3e] h-[46%] p-[0.8px] rounded-xl">
                            <div className="bg-gradient-to-b from-[#3b3b3b] to-[#323232] rounded-xl h-full flex items-center justify-center">
                                <Image alt="" width={40} height={40} src={'/icons/coin.svg'} className={`${navBarIconSize} text-white`} />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
}


export function NavBarMobile() {

    return <div className="md:hidden mx-2 flex flex-row justify-between">
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
}