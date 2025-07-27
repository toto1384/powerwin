
import { Popover } from "radix-ui";

export default function PWPopover({ children, popoverChildren }: { children: React.ReactNode, popoverChildren: React.ReactNode }) {

    const path = `M 10,30
A 30,30 0 0,0 40,15 
A 30,30 0 0,1 70,0  
A 30,30 0 0,1 100,30 
L 0,30 Z`.replaceAll('\n', " ")

    return <Popover.Root>
        <Popover.Trigger asChild>{children}</Popover.Trigger>
        <Popover.Portal container={typeof window !== "undefined" ? document.getElementById('main-content-element') : undefined}>
            <Popover.Content align="end" className="border-0 outline-0 z-50" sideOffset={5}>
                <div className="relative justify-self-end z-10" style={{ width: 100, height: 30, transform: 'translateY(-0px) translateX(-2px)' }}>
                    <div
                        className=" scale-x-[1.05] absolute inset-0 top-[0px] bg-[color:#4b4b4b]/25"
                        style={{
                            filter: "drop-shadow(0 0 0 2px #000)",
                            width: 100, height: 100,
                            clipPath: `path("${path}")`
                        }}
                    >
                    </div>
                    <div
                        className="absolute top-[1px] right-[0px] left-[1px] backdrop-blur-lg bg-[#121212]/25"
                        style={{
                            filter: "drop-shadow(0 0 0 2px #000)",
                            width: 100, height: 100,
                            clipPath: `path("${path}")`
                        }}
                    >
                    </div>
                </div>

                <div className="relative">

                    <div className=" backdrop-blur-lg bg-gradient-to-b from-[#272727]/50 to-[#161616]/50 rounded-l-4xl rounded-b-4xl">
                        {popoverChildren}
                    </div>

                    <div className="absolute inset-0 rounded-l-4xl rounded-b-4xl border-b border-l border-r border-transparent" style={{
                        background: "linear-gradient(180deg, #3b3b3b, white) border-box",
                        mask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                        maskComposite: 'exclude',
                    }}>

                    </div>

                    <div className="absolute top-0 left-0 bottom-0 right-20 rounded-l-4xl rounded-b-4xl border-t border-transparent" style={{
                        background: "linear-gradient(180deg, #3b3b3b, white) border-box",
                        mask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                        maskComposite: 'exclude',
                    }}>

                    </div>

                </div>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
}