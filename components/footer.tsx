import { useSize } from "@/utils/useSize"
import Image from "next/image"



export default function Footer() {

    const size = useSize(true)
    const cryptoIcons = <div className="flex flex-row items-center space-x-7 md:space-x-3">
        <Image alt="logo" width={size.lmd ? 30 : 20} height={size.lmd ? 30 : 20} src={'/icons/crypto/bitcoin.svg'} />
        <Image alt="logo" width={size.lmd ? 30 : 20} height={size.lmd ? 30 : 20} src={'/icons/crypto/eth.svg'} />
        <Image alt="logo" width={size.lmd ? 30 : 20} height={size.lmd ? 30 : 20} src={'/icons/crypto/x.svg'} />
        <Image alt="logo" width={size.lmd ? 30 : 20} height={size.lmd ? 30 : 20} src={'/icons/crypto/solana.svg'} />
        <Image alt="logo" width={size.lmd ? 30 : 20} height={size.lmd ? 30 : 20} src={'/icons/crypto/usdt.svg'} />
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

    return <footer className="bg-gradient-to-b md:border-b md:border-r md:border-l px-2 md:px-8 pb-5 md:rounded-b-[3rem] from-[#0b0b0b] to-[#0a0a0a] max-w-[1800px]">
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


        {/* gradient line */}
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