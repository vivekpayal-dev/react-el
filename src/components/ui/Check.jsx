const Check = ({ className }) => {
    return (
        <div class={`${className} w-6 h-6 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-full bg-white/30 flex items-center justify-center shrink-0`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div>
    )
}

export default Check