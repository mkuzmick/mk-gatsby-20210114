/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const ThirtySeventy = ({children}) => (
    <div
        css={{
            display: "grid",
            gridTemplateColumns: "3fr 7fr"
        }}
    >
        {children}
    </div>
)

export const Thirty = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const Seventy = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const StickyOne = ({children}) => {
    return (
        <div
            css={{
                position: "sticky",
                top: "50%",
                padding: "10px",
                backgroundColor: "rgba(0, 0, 20, 0.2)"
            }}
        >
            {children}
        </div>
    )
}