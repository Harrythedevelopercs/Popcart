const CTA = ({
    text,
    link,
    icon,
    imageCss = "",
    handle = "",
}) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `<a href="${link}" class="flex items-center gap-x-4 group" ${handle}>
            <img src="${icon}" alt='Best_Publisher' width={35} height={35} class="mr-lg:block hidden ${imageCss} group-hover:brightness-[0.8]">
        <span class="text-[17px] mr-lg:text-[23px] font-bold mr-lg:leading-[28px]">${text}</span></a>`
        }} />
    )
}

export default CTA
