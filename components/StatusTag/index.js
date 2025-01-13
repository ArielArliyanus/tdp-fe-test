function StatusTag({isNew, isFeatured}) {
    return (
        <>
            {
                isNew &&
                <div className={`bg-primary text-white rounded-full text-xs px-2 py-1 font-bold flex items-center justify-center`}>NEW!</div>
            }
            {
                isFeatured &&
                <div className="bg-black text-white rounded-full text-xs px-2 py-1 font-bold flex items-center justify-center">FEATURED</div>
            }
        </>
    )
}

export default StatusTag