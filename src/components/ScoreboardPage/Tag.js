import React from "react";

export default function Tag({selectedCompe, handleTag, gender, compe, level}) {

    return(
        <button onClick={()=> handleTag(compe+" "+level+" "+gender)}
            className={`text-sm md:text-lg xl:text-xl my-2 rounded-3xl border border-red-900 border-2 py-1 px-7 md:px-12 mx-3 bg-red-900 duration-100 hover:bg-[#040030] hover:border-red-900 hover:scale-[1.1]
                ${selectedCompe === compe+" "+level+" "+gender ? `bg-[#040030] border-red-900 scale-[1.1]`: ``}`}
        >
            {gender}
        </button>
    )
}
