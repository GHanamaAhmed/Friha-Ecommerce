
const ShoppingCart = ({className,...props}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <g className={className} height={10} width={10} clipPath="url(#a)">
            <path d="M47.319 8.494A6.236 6.236 0 0 0 42.52 6.25H8.837l-.087-.731A6.25 6.25 0 0 0 2.546 0h-.463a2.083 2.083 0 0 0 0 4.167h.463a2.083 2.083 0 0 1 2.069 1.84L7.48 30.38a10.417 10.417 0 0 0 10.346 9.202h21.756a2.083 2.083 0 1 0 0-4.166H17.827a6.25 6.25 0 0 1-5.875-4.167h24.833a10.416 10.416 0 0 0 10.253-8.569l1.635-9.07a6.237 6.237 0 0 0-1.354-5.117ZM14.583 50a4.167 4.167 0 1 0 0-8.333 4.167 4.167 0 0 0 0 8.333ZM35.417 50a4.167 4.167 0 1 0 0-8.333 4.167 4.167 0 0 0 0 8.333Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h50v50H0z" />
            </clipPath>
        </defs>
    </svg>
)

export { ShoppingCart }
