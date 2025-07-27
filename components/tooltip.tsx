import { format } from "date-fns"
import { useMemo } from "react"


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