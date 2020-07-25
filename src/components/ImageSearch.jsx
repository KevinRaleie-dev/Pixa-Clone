import React, { useState } from 'react'

const ImageSearch = ({ searchText,  }) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center">
                <input onChange={e => setText(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" id="grid-password" type="text" placeholder="Search images"/>
                <br />
                <button className=" mb-3 ml-4 shadow bg-purple-500 hover:bg-purple-400  focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Search
                </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;
