import React from "react"


export default function Container(
    { children, className, borderClassName, disablePadding, disableContainer, disableBgBr, rounded, onClick, reverseBorder, borderStyle, disabled, type = 'div', style, disableDimensionFull, miniBorder }:
        {
            className?: string, children: React.ReactNode, borderClassName?: string, disablePadding?: boolean,
            disableContainer?: boolean, disableBgBr?: boolean, rounded?: string, onClick?: () => void,
            reverseBorder?: boolean, borderStyle?: any, disabled?: boolean, type?: 'button' | 'div', style?: any, disableDimensionFull?: boolean,
            miniBorder?: boolean
        }) {

    if (disableContainer) return children

    return <div className={`relative h-full ${borderClassName}`} onClick={onClick} style={borderStyle}>


        {React.createElement(type, {
            className: `${!disablePadding && "py-4 md:py-10 px-3 md:px-6"} inset-0 ${disableBgBr ? rounded : 'rounded-xl bg-gradient-to-b from-black/30 to-black/10'} ${disableDimensionFull ? '' : 'h-full w-full'} ${className}`,
            children, style, disabled
        })}

        <div className={`absolute inset-0 z-10 ${miniBorder ? 'border-[0.5px]' : 'border'} border-transparent ${disableBgBr ? rounded : 'rounded-xl'} `} style={{
            background: `linear-gradient(${reverseBorder ? '0deg' : '180deg'}, rgba(255, 255, 255, 1), rgba(255,255,255,0.2)) border-box`,
            mask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
            maskComposite: 'exclude',
            pointerEvents: 'none'
        }}>

        </div>
    </div>
}