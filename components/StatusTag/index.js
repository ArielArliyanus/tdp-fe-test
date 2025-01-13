function StatusTag({isNew, isFeatured}) {
    return (
        <>
            {
                isNew &&
                <div className="bg-primary text-white rounded-full text-xs font-bold flex items-center justify-center px-2 py-1 min-w-[60px] h-8">
                    <div className="flex items-center justify-center my-auto">NEW!</div>
                </div>
            }
            {
                isFeatured &&
                <div className="bg-black text-white rounded-full text-xs font-bold flex items-center justify-center px-2 py-1 min-w-[60px] h-8">
                    <div className="flex items-center justify-center my-auto">FEATURED</div>
                </div>
            }
        </>
    )
}

export default StatusTag
